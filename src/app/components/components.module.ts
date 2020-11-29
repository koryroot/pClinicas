import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { TableListComponent } from './table-list/table-list.component';


@NgModule({
  declarations: [
    FormAuthComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [FormAuthComponent,TableListComponent]
})
export class ComponentsModule { }
