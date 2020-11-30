import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './enviroment/enviroment.service';
import { Router } from '@angular/router';
import { isDefined } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | boolean;

  constructor( private http:HttpClient, private route: Router) {
    if (localStorage.getItem("token") === 'undefined'){
      console.log(localStorage.getItem("token"));
      this.token = false;
    }else{

      console.log(localStorage.getItem("token"));
      this.token = localStorage.getItem("token");
    }
   }


  register(ref,body){

    return this.http.post( apiUrl + ref, body);
  }
  login(){
    
  }
  saveUser(token){
    console.log("aqui");
    this.token = token;
    localStorage.setItem("token",token);
  }
  cerrarSeccion(){
    this.token = null;
    localStorage.removeItem("token");
  }
  getToken(){
    return this.token;
  }
}
