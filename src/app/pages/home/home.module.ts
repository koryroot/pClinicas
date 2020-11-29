import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NavbarComponent } from '../../components/navbar/navbar.component';
const components =[
  NavbarComponent
]

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
    
  ],
  declarations: [HomePage, ...components]
})
export class HomePageModule {}
