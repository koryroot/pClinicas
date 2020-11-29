import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaPage } from './consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPage,
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'update/:cedula',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaPageRoutingModule {}
