import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../enviroment/enviroment.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteRequestService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getListPacientes(token,ref){
    console.log(`${apiUrl}${ref}?token=${token}`);
    return this.http.get(`${apiUrl}${ref}?token=${token}`);
  }
  regPaciente(body){
    console.log(`${apiUrl}patient/register?token=${this.auth.getToken()}`)
    return this.http.post(`${apiUrl}patient/register?token=${this.auth.getToken()}`,body);
  }
  deletePaciente(cedula){
    return this.http.delete(`${apiUrl}patient/delete?cedula=${cedula}&token=${this.auth.getToken()}`);
  }
}
