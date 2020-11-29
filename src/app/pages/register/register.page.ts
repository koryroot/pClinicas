import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder , private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      name: ['' , [Validators.required]],
      correo: ['' , [Validators.required]],
      pass: ['' , [Validators.required]],
    })
  }
  cargar(){
    console.log(this.form);
    const body ={
      "name":this.form.controls.name.value,
      "email":this.form.controls.correo.value,
      "password": this.form.controls.pass.value
    }
    console.log(body);
    this.auth.register('doctor/register',body).subscribe((res)=>{
      this.auth.saveUser(res["response"].token);
      console.log(this.auth.getToken());
    // "ok": true,
    // "message": "Doctor creado correctamente"
    })
    
  }
}
