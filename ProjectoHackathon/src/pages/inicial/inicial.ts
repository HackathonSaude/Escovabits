import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';


/*
  Generated class for the Inicial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html'
})
export class InicialPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello InicialPage Page');
  }

  login() {

      this.navCtrl.push(LoginPage);
      //modal.present();

  }

}
