
import 'rxjs/add/operator/map';

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
import { Usuario } from '../components/usuario';


/*
  Generated class for the ContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {
  
  static get parameters() {
      return [[Http]];
  }

  headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  options      = new RequestOptions({ headers: this.headers }); // Create a request option

  constructor(public http: Http) {
    console.log('Hello ContactProvider Provider');
  }
  
  login(matricula: string) {
    
        console.log("matricula " + matricula);
        //let bodyString = JSON.stringify(usuario); // Stringify payload
        let url = "http://157.86.34.163:3000/api/usuario/login/" + matricula;
        console.log("url " + url);

        return this.http.get("http://157.86.34.163:3000/api/usuario/login/" + matricula)
                    .map(res => res.json()); // ...and calling .json() on the response to return data
  }

}
