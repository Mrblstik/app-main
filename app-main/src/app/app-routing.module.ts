import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'recuperar', loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule) },
  { path: 'ofrecer-viaje', loadChildren: () => import('./ofrecer-viaje/ofrecer-viaje.module').then(m => m.OfrecerViajePageModule) },
  { path: 'solicitar-viaje', loadChildren: () => import('./solicitar-viaje/solicitar-viaje.module').then(m => m.SolicitarViajePageModule) },
  { path: 'detalles-viaje', loadChildren: () => import('./detalles-viaje/detalles-viaje.module').then(m => m.DetallesViajePageModule) },

  
  {
    path: 'mis-viajes',
    loadChildren: () => import('./mis-viajes/mis-viajes.module').then( m => m.MisViajesPageModule)
  },
  {
    path: 'gestion-medios-pago',
    loadChildren: () => import('./gestion-medios-pago/gestion-medios-pago.module').then( m => m.GestionMediosPagoPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
