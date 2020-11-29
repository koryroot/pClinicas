import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://dgon3z.deta.dev/api/"
  private token: string;
  constructor( private http:HttpClient) {
      this.token = JSON.stringify(localStorage.getItem("token"));
   }


  register(ref,body){
    return this.http.post(this.apiUrl + ref, body);
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
