import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { ContatoPage } from '../contato/contato';
import { NativeStorage } from 'ionic-native';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ContatoPage;

  perfil: string;
  usuario: boolean = false;

  constructor() {
    // NativeStorage.getItem('usuario')
    //         .then(
    //         data => this.perfil = data.perfil,
    //         error => console.error(error)
    //     );
    //     //alert(this.perfil);

    //     if(this.perfil == "usuario"){
    //       this.usuario == true;
    //     }
        //alert(this.usuario);
  }

  

}
