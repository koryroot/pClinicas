import { Component, OnInit } from '@angular/core';
import { PacienteRequestService } from '../../../services/pacientes/paciente-request.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  public header = ["name","lastname","cedula","gender"];
  public objectTable = ["name","lastname","cedula","gender"];
  
  constructor() { }
  // "alergies": "al polvo",
  // "birthdate": "1989-10-14 00:00:00.000",
  // "bloodType": "O+",
  // "cedula": "40240953303",
  // "doctorEmail": "uva@gmail.com",
  // "email": "platano@gmail.com",
  // "foto": "./",
  // "gender": "M",
  // "key": "40240953303",
  // "lastname": "MATEO ",
  // "name": "DAVID JOSE"
  ngOnInit() {
   
  }
 

}
