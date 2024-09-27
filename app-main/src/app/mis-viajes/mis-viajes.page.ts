import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

interface Viaje {
  id: number;
  ruta: string;
  conductor: string;
  horario: string;
  patente: string; // Añadir patente
  costo: number;
}

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage {
  viajesOfrecidos: Viaje[] = [
    { id: 1, ruta: 'DuocUC a Coronel', conductor: 'Juan Pérez', horario: '18:00', patente: 'AB123CD', costo: 2000 },
    { id: 2, ruta: 'DuocUC a Chillán', conductor: 'María López', horario: '21:00', patente: 'XY987ZT', costo: 2500 },
    { id: 3, ruta: 'DuocUC a Mall del centro', conductor: 'Ana Torres', horario: '18:30', patente: 'EF456GH', costo: 2000 },
    { id: 4, ruta: 'DuocUC a San Pedro', conductor: 'Luis García', horario: '21:30', patente: 'IJ789KL', costo: 2500 },
  ];

  viajesSolicitados: Viaje[] = [
    { id: 1, ruta: 'Coronel a DuocUC', conductor: 'Carlos Ríos', horario: '19:00', patente: 'MN123OP', costo: 2000 },
    { id: 2, ruta: 'Chillán a DuocUC', conductor: 'Sofía Martínez', horario: '22:00', patente: 'QR456ST', costo: 2500 },
    { id: 3, ruta: 'Mall del centro a DuocUC', conductor: 'Fernando Gómez', horario: '19:30', patente: 'UV789WX', costo: 2000 },
    { id: 4, ruta: 'San Pedro a DuocUC', conductor: 'Lucía Fernández', horario: '22:30', patente: 'YZ123AB', costo: 2500 },
  ];

  constructor(private alertController: AlertController, private navController: NavController) {}

  cancelarViaje(id: number): void {
    this.viajesOfrecidos = this.viajesOfrecidos.filter(viaje => viaje.id !== id);
  }

  async aceptarViaje(id: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Viaje Aceptado',
      message: 'El viaje ofrecido fue aceptado con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navController.navigateRoot('/home');
        }
      }]
    });
    await alert.present();
  }

  async aceptarSolicitud(id: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Solicitud Aceptada',
      message: 'La solicitud de viaje fue aceptada con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navController.navigateRoot('/home');
        }
      }]
    });
    await alert.present();
  }

  cancelarSolicitud(id: number): void {
    this.viajesSolicitados = this.viajesSolicitados.filter(viaje => viaje.id !== id);
  }
}
