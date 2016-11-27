import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactProvider {
  
  static get parameters() {
      return [[Http]];
  }

  constructor(public http: Http) {
    console.log('Hello ContactProvider Provider');
  }

  getRota(){
    return this.http.get('https://maps.googleapis.com/maps/api/directions/json?origin=Av. Rui Barbosa, 716 - Flamengo - Rio de Janeiro - RJ&waypoints=optimize:true|via:Rua Visconde de Cabo Frio, 21/101, RJ, Rio de Janeiro, cep 20510-160|via:Rua Carvalho Alvim, 181/107 , Tijuca, Rio de Janeiro, RJ, cep20510-100|via:Rua pereira de Siqueira, 79/407 , Tijuca , Rio de Janeiro , RJ, cep 20550-020|via:Rua Garibaldi, 163 Bl 02 , Tijuca, Rio de Janeiro , RJ, cep 20511-330&destination=Av. Rui Barbosa, 716 - Flamengo - Rio de Janeiro - RJ&mode=driving&departure_time=now&traffic_model=pessimistic&key=AIzaSyDG08Y78YRiI7GQawOxSWPLQAXsZZRYrcQ')
        .map(res => res.json());
  }

  getByDoador(matricula:string){
    return this.http.get('http://157.86.34.163:3000/api/registro/list/' + matricula)
        .map(res => res.json());
  }
  
  getAll() {
      return this.http.get('http://157.86.34.163:3000/api/registro/list')
        .map(res => res.json());
  }

}
