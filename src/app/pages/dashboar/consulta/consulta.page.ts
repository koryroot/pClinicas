import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  public header = ["Nombre","Apellido","Cedula","Genero"];
  public objectTable = ["name","lastname","cedula","gender"];
  public enpoint = 'patient/all';

  constructor() { }

  ngOnInit() {
  }

}
