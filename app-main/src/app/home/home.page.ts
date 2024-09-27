import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navCtrl: NavController) {}

  // Método para ofrecer un viaje
  offerRide() {
    console.log('Ofrecer viaje');
    this.navCtrl.navigateForward('/ofrecer-viaje'); // Navegar a la página de ofrecer viaje
  }

  // Método para solicitar un viaje
  requestRide() {
    console.log('Solicitar viaje');
    this.navCtrl.navigateForward('/solicitar-viaje'); // Navegar a la página de solicitar viaje
  }

  // Método para ver detalles de un viaje
  verDetalles() {
    console.log('Detalles de viaje');
    this.navCtrl.navigateForward('/detalles-viaje'); // Navegar a la página de detalles de viaje
  }

  // Método para ver detalles de un viaje
  verMisViajes() {
    console.log('Ver mis V}viajes');
    this.navCtrl.navigateForward('/mis-viajes'); // Navegar a la página verMisViajes
  }
}
