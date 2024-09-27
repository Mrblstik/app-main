import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionMediosPagoPageRoutingModule } from './gestion-medios-pago-routing.module';

import { GestionMediosPagoPage } from './gestion-medios-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionMediosPagoPageRoutingModule
  ],
  declarations: [GestionMediosPagoPage]
})
export class GestionMediosPagoPageModule {}
