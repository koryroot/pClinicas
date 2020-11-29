import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteRequestService } from 'src/app/services/pacientes/paciente-request.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  @Input() public rute: string;

  @Input() public header: [] = [];
  @Input() public keys: [];
  @Input() public endpoit: string;
  public data: [];
  
  constructor(private paciente: PacienteRequestService,
              private user: AuthService, private router: Router,
              ) {

   }
   
  ngOnInit() {
    this.getlist();
  }

  goto(){
    console.log(this.rute);
    console.log(this.router.url)
    this.router.navigate([this.router.url + "/update"])
  }
  delete(cedula){
    // .
  }

  getlist(){
    console.log(this.endpoit);
    this.paciente.getListPacientes(this.user.getToken(), this.endpoit).subscribe((res)=>{
      console.dir(res);
      console.log(res['response'].pacientes);
      this.data = res['response'].pacientes;
    });
  }
}
