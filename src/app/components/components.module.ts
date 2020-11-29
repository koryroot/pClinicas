import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { TableListComponent } from './table-list/table-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const components = [
  FormAuthComponent,TableListComponent,NavbarComponent
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
