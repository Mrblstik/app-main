import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.page.html',
  styleUrls: ['./solicitar-viaje.page.scss'],
})
export class SolicitarViajePage {
  destino: string = '';
  fecha: string = '';
  hora: string = '';
  numeroPersonas: number = 1;
  ValorTotal: number = 0; // Añadido ValorTotal

  constructor(private router: Router, private alertController: AlertController) {}

  async enviarSolicitud() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas solicitar el viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Lógica para enviar la solicitud
            console.log('Solicitud enviada:', {
              destino: this.destino,
              fecha: this.fecha,
              hora: this.hora,
              numeroPersonas: this.numeroPersonas,
              ValorTotal: this.ValorTotal, // Incluir ValorTotal en el log
            });

            // Mostrar alerta de éxito
            this.showConfirmationAlert();
          },
        },
      ],
    });

    await alert.present();
  }

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Solicitud Exitosa',
      message: 'Tu solicitud fue enviada con éxito a los conductores disponibles.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']); // Redirige a la página de inicio
          },
        },
      ],
    });

    await alert.present();
  }
}
