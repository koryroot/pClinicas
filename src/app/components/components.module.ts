import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { TableListComponent } from './table-list/table-list.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FormAuthComponent,
    TableListComponent,
    NavbarComponent
  ],
  imports: [
  CommonModule,
  ],
  exports: [FormAuthComponent,TableListComponent,NavbarComponent]
})
export class ComponentsModule { }
