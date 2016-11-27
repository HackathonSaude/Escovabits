import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { DetailPage } from '../detail/detail';
import { ContactProvider } from '../../providers/contact-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ContactProvider]
})
export class HomePage {

  rotaStatus: string = "Pendente";
  rotaButton: string = "Iniciar";

  duracao : string;

  constructor(public navCtrl: NavController, 
  private contactService: ContactProvider,
  public modalCtrl: ModalController,
  public loadingCtrl: LoadingController) {
      this.iniciarRota();
  }

  iniciarRota() {

      let loading = this.loadingCtrl.create({ content: "Traçando a rota..."});
        loading.present();
                
        this.contactService.getRota().subscribe(
            data => {
              //alert("adawd: "+ data.routes[0].legs[0].duration_in_traffic.text);
              this.duracao = data.routes[0].legs[0].duration_in_traffic.text;
              //data.routes[0].legs[0].end_location.lat;
                
                loading.dismiss();
            },
            err => {
                //console.log(err);
                loading.dismiss();
            },
            () => console.log('Contact download Complete')
        );

  } 

  viewInfo(event) { 
      //this.navCtrl.push(InfoPage);
      let modal = this.modalCtrl.create(InfoPage);
      modal.present();
  }

  verRota() {
    //alert(this.rotaStatus);
    this.navCtrl.push(DetailPage);
  }

}
