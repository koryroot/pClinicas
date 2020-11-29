import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../enviroment/enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteRequestService {

  constructor(private http: HttpClient) { }

  getListPacientes(token,ref){
    console.log(`${apiUrl}${ref}?token=${token}`);
    return this.http.get(`${apiUrl}${ref}?token=${token}`);
  }
}
