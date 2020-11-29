import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder , private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      // name: ['' , [Validators.required]],
      correo: ['' , [Validators.required]],
      pass: ['' , [Validators.required]],
    })
  }
  cargar(){
    console.log(this.form);
    const body ={
      // "name":this.form.controls.name.value,
      "email":this.form.controls.correo.value,
      "password": this.form.controls.pass.value
    }
    console.log(body);
    this.auth.register('doctor/login',body).subscribe((res)=>{
      this.auth.saveUser(res["response"].token);
      console.log(this.auth.getToken());
      this.router.navigate(['']);

    // "ok": true,
    // "message": "Doctor creado correctamente"
    },(err)=>{
      console.log(err);
    })
    
  }

  
}