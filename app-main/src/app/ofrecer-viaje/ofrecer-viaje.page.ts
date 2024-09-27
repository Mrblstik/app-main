import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ofrecer-viaje',
  templateUrl: './ofrecer-viaje.page.html',
  styleUrls: ['./ofrecer-viaje.page.scss'],
})
export class OfrecerViajePage {
  licensePlate: string = '';  // Nueva propiedad para la patente
  destination: string = '';
  travelDate: string = '';
  travelTime: string = '';
  costPerPerson: number | null = null;
  availableSeats: number | null = null;

  constructor(private alertController: AlertController) {}

  isFormValid(): boolean {
    return (
      this.licensePlate.trim() !== '' &&  // Validación de la patente
      this.destination.trim() !== '' &&
      this.travelDate.trim() !== '' &&
      this.travelTime.trim() !== '' &&
      this.costPerPerson !== null &&
      this.availableSeats !== null
    );
  }

  async submitOffer() {
    if (this.isFormValid()) {
      const alert = await this.alertController.create({
        header: 'Confirmar oferta',
        message: `¿Estás seguro de que deseas ofrecer este viaje a ${this.destination} el ${this.travelDate} a las ${this.travelTime}? Patente: ${this.licensePlate}`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.showSuccessAlert();
              console.log('Oferta enviada:', {
                patente: this.licensePlate,
                destino: this.destination,
                fecha: this.travelDate,
                hora: this.travelTime,
                costo: this.costPerPerson,
                asientosDisponibles: this.availableSeats,
              });
            },
          },
        ],
      });

      await alert.present();
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: '¡Viaje ofrecido!',
      message: 'Tu viaje ha sido ofrecido con éxito.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
