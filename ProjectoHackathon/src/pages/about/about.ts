import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  verTutorial() {
      this.navCtrl.push(TutorialPage);
      //this.dismiss();
      //modal.present();
  }

}
