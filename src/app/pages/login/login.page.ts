import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      // name: ['' , []],
      correo: ['' , []],
      pass: ['' , []],
    })
  }
  cargar(){
    console.log(this.form);
  }
}