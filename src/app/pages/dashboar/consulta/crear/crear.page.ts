import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteRequestService } from 'src/app/services/pacientes/paciente-request.service';

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
    private rute: ActivatedRoute) {
      rute.params.subscribe(res=>{console.log(res)})
    }

  ngOnInit() {
    this.initform();
    this.param = this.rute.snapshot.params.cedula;
    console.log(this.param);
    this.param === "new" ? this.isUpdate = false :  this.isUpdate = true;
  }
  initform(){
    this.form  = this.fb.group({
      cedula: ['',Validators.required],
      seguro: ['',Validators.required],
      diagnostico: ['',Validators.required],
      motivo: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  save(){
    console.log(this.form.controls)
    const body =
      {
        "patientCedula": this.form.controls.cedula.value,
        "insuranceNumber": this.form.controls.seguro.value,
        "date": this.form.controls.fecha.value,
        "amount": 0,
        "reason": this.form.controls.motivo.value,
        "diagnose": this.form.controls.diagnostico.value,
        "note": "",
        "foto": ""
      }
      console.log(body)
    this.pacienterequest.regCosulta(body).subscribe((res)=>{
        this.router.navigate(['dash/consulta']);
    });
  }
  update(){
    const body =
      {
        "patientCedula": this.form.controls.cedula.value,
        "insuranceNumber": this.form.controls.seguro.value,
        "date": this.form.controls.fecha.value,
        "amount": 0,
        "reason": this.form.controls.motivo.value,
        "diagnose": this.form.controls.diagnostico.value,
        "note": "",
        "foto": ""
      }
    this.pacienterequest.updateConsulta(body, this.param).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['dash/consulta']);
    });
  }
  back(){
    this.router.navigate(['dash/consulta']);
  }

}
