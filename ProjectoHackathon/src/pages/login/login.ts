import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login-provider';
import { Usuario } from '../../components/usuario';

import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider, Usuario]
})
export class LoginPage {

  matricula: string;

  usuario: Usuario;
 

  constructor(public navCtrl: NavController, 
  public viewCtrl:ViewController,
  private loginProvider: LoginProvider,
  private loadingCtrl: LoadingController,
  public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  entrar(){
    console.log(this.matricula);

    let loading = this.loadingCtrl.create({ content: "Aguarde..."});
        loading.present();

      this.loginProvider.login(this.matricula).subscribe(
          data => {
              loading.dismiss();
              if(data.id !== ""){
                console.log(data);
                
                NativeStorage.setItem('usuario', 
                  { 
                      id: data.id, 
                      matricula: data.matricula,
                      nome: data.nome,
                      perfil: data.perfil
                    }
                  )
                    .then(
                    () => console.log('usuario'),
                    error => console.error('Error storing item', error)
                );

                // NativeStorage.getItem('usuario')
                //     .then(
                //     data => alert(data.nome),
                //     error => console.error(error)
                // );

                this.navCtrl.push(TabsPage);
                this.dismiss();
              } else {
                let toast = this.toastCtrl.create({
                  message: 'Acesso negado =/',
                  duration: 3000
                });
                toast.present();
              }
          },
          err => {
              let toast = this.toastCtrl.create({
                message: 'Erro ao tertar entrar =/',
                duration: 10000
              });
              toast.present();
              loading.dismiss();
          },
          () => console.log('Login complete')
      );

    
  }

}
