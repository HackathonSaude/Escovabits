import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the Info page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello InfoPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
