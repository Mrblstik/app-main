import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

// Definimos una interfaz para los medios de pago
interface MedioDePago {
  tipo: string;
  detalle: string;
  vencimiento: string;
}

@Component({
  selector: 'app-gestion-medios-pago',
  templateUrl: './gestion-medios-pago.page.html',
  styleUrls: ['./gestion-medios-pago.page.scss'],
})
export class GestionMediosPagoPage {
  // Array que contendrá los medios de pago
  mediosDePago: MedioDePago[] = [];
  isModalOpen = false; // Para controlar la apertura del modal
  nuevoMedio: MedioDePago = { tipo: '', detalle: '', vencimiento: '' }; // Medio de pago a editar/agregar
  modoEdicion = false; // Para saber si estamos editando o agregando

  constructor(private alertController: AlertController) {}

  // Método para agregar un nuevo medio de pago
  agregarNuevoMedio() {
    this.modoEdicion = false; // No estamos en modo edición
    this.nuevoMedio = { tipo: '', detalle: '', vencimiento: '' }; // Reseteamos el formulario
    this.isModalOpen = true; // Abrimos el modal
  }

  // Método para editar un medio de pago existente
  editarMedio(medio: MedioDePago) {
    this.modoEdicion = true; // Estamos en modo edición
    this.nuevoMedio = { ...medio }; // Copiamos los valores del medio a editar
    this.isModalOpen = true; // Abrimos el modal
  }

  // Método para eliminar un medio de pago
  eliminarMedio(medio: MedioDePago) {
    // Eliminamos el medio del array
    this.mediosDePago = this.mediosDePago.filter(item => item !== medio);
  }

  // Método para guardar el medio de pago (ya sea nuevo o editado)
  guardarMedio() {
    if (this.modoEdicion) {
      // Si estamos editando, actualizamos el medio existente
      const index = this.mediosDePago.findIndex(item => item.detalle === this.nuevoMedio.detalle);
      this.mediosDePago[index] = { ...this.nuevoMedio };
    } else {
      // Si estamos agregando, lo añadimos al array
      this.mediosDePago.push({ ...this.nuevoMedio });
    }
    this.isModalOpen = false; // Cerramos el modal después de guardar
  }

  // Método para cerrar el modal sin guardar cambios
  cerrarModal() {
    this.isModalOpen = false;
  }
}
