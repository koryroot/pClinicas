import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth/form-auth.component';


@NgModule({
  declarations: [
    FormAuthComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [FormAuthComponent]
})
export class ComponentsModule { }
