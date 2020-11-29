import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboarPageRoutingModule } from './dashboar-routing.module';

import { DashboarPage } from './dashboar.page';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboarPageRoutingModule,
  ],
  declarations: [DashboarPage]
})
export class DashboarPageModule {}
