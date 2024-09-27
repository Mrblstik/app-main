import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-viaje',
  templateUrl: './detalles-viaje.page.html',
  styleUrls: ['./detalles-viaje.page.scss'],
})
export class DetallesViajePage {
  trip = {
    destination: 'Nombre del destino', // Reemplaza con el destino real
    date: '01/01/2024', // Reemplaza con la fecha real
    time: '18:00', // Reemplaza con la hora real
    driver: 'Nombre del conductor', // Reemplaza con el nombre real
    capacity: 3, // Reemplaza con la capacidad real
    comments: 'Comentarios opcionales', // Reemplaza con los comentarios reales
    plate: 'ABC123' // Agrega la patente aquí
  };

  constructor(private alertController: AlertController, private router: Router) {}

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Tu viaje ha sido confirmado.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home']); // Redirige a la página de inicio
        }
      }]
    });

    await alert.present();
  }

  confirmTrip() {
    // Aquí puedes agregar la lógica para confirmar el viaje si es necesario
    this.showConfirmationAlert();
  }
}
