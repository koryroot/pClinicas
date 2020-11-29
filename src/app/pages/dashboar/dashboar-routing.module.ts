import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboarPage } from './dashboar.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboarPage,
      },
      {
        path: 'paciente',
        loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesPageModule)
      },
      {
        path: 'consulta',
        loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboarPageRoutingModule {}
