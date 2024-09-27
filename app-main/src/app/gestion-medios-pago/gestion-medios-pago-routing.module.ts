import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionMediosPagoPage } from './gestion-medios-pago.page';

const routes: Routes = [
  {
    path: '',
    component: GestionMediosPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionMediosPagoPageRoutingModule {}
