import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { PacienteRequestService } from 'src/app/services/pacientes/paciente-request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';







@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  public form: FormGroup;
  public param;
  public isUpdate: boolean;
  public foto: string = "../../../../../assets/mas.png";
  constructor(
    private router: Router,
    private pacienterequest: PacienteRequestService,
    private fb: FormBuilder,
    private rute: ActivatedRoute,
    ) {
      rute.params.subscribe(res=>{console.log(res)})
    }

  ngOnInit() {
    this.initform();
    this.param = this.rute.snapshot.params.cedula;
    console.log(typeof this.param);
    this.param === "new" ? this.isUpdate = false :  this.isUpdate = true;
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
      this.router.navigate(['dash/paciente']);

    })
  }
  update(param){
    console.log(this.form.controls)
    const body = {
      "cedula": this.form.controls.cedula.value,
      "foto": "",
      "email":"rm12345@gmail.com",
      "bloodType": this.form.controls.tipeBlood.value,
      "alergies": this.form.controls.alerg.value
    };
    this.pacienterequest.updatePaciente(body).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['dash/paciente']);
     
    });
  }
  back(){
    this.router.navigate(['dash/paciente']);
  }

}
