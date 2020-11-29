import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  public header = ["cedula","razon","nota","dianostico"];
  public objectTable = ["patientCedula","reason","note","diagnose"];
  public enpoint = 'consultation/doctor/all';

  constructor() { }

  ngOnInit() {
  }

}
