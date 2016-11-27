import { Component } from '@angular/core';

import { DetailPage } from '../detail/detail';
import { ContactProvider } from '../../providers/contact-provider';
import { LoadingController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactProvider]
})
export class ContactPage {
  
  perfil: string;
  contacts: Array<any>;
  
  constructor(
      private navCtrl: NavController, 
      private contactService: ContactProvider,
      public loadingCtrl: LoadingController) {
    //this.getContacts();

    this.getContacts();
  }
  
  getContacts() {

      NativeStorage.getItem('usuario')
            .then(
            data => this.getRegistros(data),
            error => console.error(error)
        );

  } 

  getRegistros(usuario: any){
      
      let loading = this.loadingCtrl.create({ content: "Aguarde..."});
        loading.present();
                
                if(usuario.perfil == "doador"){
                    this.contactService.getByDoador(usuario.matricula).subscribe(
                        data => {
                            this.contacts = data; 
                            //console.log(this.contacts[0]);
                            loading.dismiss();
                        },
                        err => {
                            //console.log(err);
                            loading.dismiss();
                        },
                        () => console.log('Contact download Complete')
                    );

                } else if(usuario.perfil == "admin"){

                    this.contactService.getAll().subscribe(
                        data => {
                            this.contacts = data; 
                            //console.log(this.contacts[0]);
                            loading.dismiss();
                        },
                        err => {
                            //console.log(err);
                            loading.dismiss();
                        },
                        () => console.log('Contact download Complete')
                    );

                } else if(usuario.perfil == "motoboy"){
                    
                }
  }
  
  itemTapped(event, contact: Object) {
      //let c = contact as IContato;
      console.log(contact);  
      this.navCtrl.push(DetailPage, { obj: contact });
  }

}