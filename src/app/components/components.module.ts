import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { TableListComponent } from './table-list/table-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



const components = [
  FormAuthComponent,TableListComponent,NavbarComponent,SearchComponent
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule,FormsModule],
exports: [...components],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
