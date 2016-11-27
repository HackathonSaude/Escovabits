import { Component } from '@angular/core';
import { Contato } from '../../components/contato';
import { ContactProvider } from '../../providers/contact-provider';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarker, GoogleMapsMarkerOptions } from 'ionic-native';
import { Geolocation } from 'ionic-native';
//, GoogleMapsMarker, GoogleMapsMarkerOptions
import { NavController, NavParams, Platform, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [Contato, ContactProvider]
})
export class DetailPage {

    map: GoogleMap;
    contato: Contato;
    tempo: string;

    //private ic: Contato
   constructor(private navCtrl: NavController, 
   private navParams: NavParams, 
   public platform: Platform,
   public toastCtrl: ToastController,
   private contactService: ContactProvider) {
        //this.contato = navParams.get('obj');
        //console.log(this.contato);
        //console.log(this.contato.nome);
        this.setRota();
        platform.ready().then(() => {
            this.loadMap();
        });

    }

    setRota() {

        this.contactService.getRota().subscribe(
            data => {
              //alert("adawd: "+ data.routes[0].legs[0].duration_in_traffic.text);
              this.tempo = data.routes[0].legs[0].duration_in_traffic.text;
              //data.routes[0].legs[0].end_location.lat;
            },
            err => {
                //console.log(err);
            },
            () => console.log('Contact download Complete')
        );

  } 

    loadMap(){

        let location = new GoogleMapsLatLng(-22.9103552,-43.7285336);

        Geolocation.getCurrentPosition().then((position) => {
            
            //let location = new GoogleMapsLatLng(-22.9103552,-43.7285336);
            let location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);

        }, (err) => {
            console.log(err);
            let toast = this.toastCtrl.create({
                  message: 'Habilite seu GPS !!!',
                  duration: 3000
                });
                toast.present();
        });

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

        let markerOptions: GoogleMapsMarkerOptions = {
        position: location,
        title: 'Estou aqui !'
        };

       this.map.addMarker(markerOptions)
        .then((marker: GoogleMapsMarker) => {
            marker.showInfoWindow();
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });
 
    }

}
