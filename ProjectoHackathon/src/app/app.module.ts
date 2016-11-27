import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { HttpModule, JsonpModule } from '@angular/http';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { DetailPage } from '../pages/detail/detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';InfoPage
import { InfoPage } from '../pages/info/info';
import { InicialPage } from '../pages/inicial/inicial';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ContatoPage } from '../pages/contato/contato';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailPage,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    InicialPage,
    LoginPage,
    TutorialPage,
    ContatoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailPage,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoPage,
    InicialPage,
    LoginPage,
    TutorialPage,
    ContatoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
