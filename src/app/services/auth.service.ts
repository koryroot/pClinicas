import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './enviroment/enviroment.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor( private http:HttpClient) {
    const localState = localStorage.getItem("token");
    if (localState === undefined || localState === '' ){
      console.log(localState);
      this.token = null;
    }else{
      console.log(localState);
      this.token = localState;
    }
   }


  register(ref,body){

    return this.http.post( apiUrl + ref, body);
  }
  login(){
    
  }
  saveUser(token){
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
