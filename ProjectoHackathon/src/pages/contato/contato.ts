import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contato page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})
export class ContatoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContatoPage Page');
  }

}
