import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPage } from './consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage,
  },
  {
    path: 'crear/:new',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)

  },
  {
    path: 'actualizar/:cedula',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPageRoutingModule {}
