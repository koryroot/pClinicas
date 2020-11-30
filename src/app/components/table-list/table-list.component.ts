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
  @Input() public busqueda: string;


  public data: [];
  public loadding = false;
  public empy = false;
  constructor(private paciente: PacienteRequestService,private user: AuthService, private router: Router,
              ) {}
  ngOnInit() {
    this.getlist();
  }

  goto(cedula){
    this.router.navigate([this.router.url + "/actualizar/" + cedula])
  }
  del(cedula){
    this.paciente.deletePaciente(cedula).subscribe((res)=>{
      console.log(res);
      this.getlist();
      // this.router.navigate(['/dash/paciente']);
    }
    )
  }
  getlist(){
    this.loadding = true;
    console.log(this.endpoit);
    this.paciente.getListPacientes(this.user.getToken(), this.endpoit).subscribe((res)=>{
      console.dir(res);
      
      this.data = this.endpoit === 'patient/all' ? res['response'].pacientes : res['response'].consultations;
      console.log(this.data)
      this.data.length === 0 ? this.empy = false : this.empy = true;
      this.loadding = false;

    });
  }
}
