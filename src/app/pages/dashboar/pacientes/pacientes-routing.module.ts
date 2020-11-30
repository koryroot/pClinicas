import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesPage } from './pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesPage,
  },
  {
    path: 'crear/:cedula',
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
export class PacientesPageRoutingModule {}
