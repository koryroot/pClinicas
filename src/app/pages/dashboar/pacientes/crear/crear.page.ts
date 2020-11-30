import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteRequestService } from 'src/app/services/pacientes/paciente-request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  public form: FormGroup;
  constructor(
    private route: Router,
    private pacienterequest: PacienteRequestService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initform();
  }
  initform(){
    this.form  = this.fb.group({
      cedula: ['',Validators.required],
      tipeBlood: ['',Validators.required],
      alerg: ['',Validators.required],
      email: ['',]
    })
  }

  cargar(){
    console.log(this.form.controls)
    const body={
      "cedula": this.form.controls.cedula.value,
      "foto": "",
      "email":"rm12345@gmail.com",
      "bloodType": this.form.controls.tipeBlood.value,
      "alergies": this.form.controls.alerg.value
    }
    this.pacienterequest.regPaciente(body).subscribe((res)=>{
      console.log(res);
    })
  }
}
