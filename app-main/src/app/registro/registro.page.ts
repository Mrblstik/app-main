import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string;
  apellido: string;
  rut: string;
  rutValido: boolean;
  email: string;
  telefono: string;
  patente: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.rut = '';
    this.rutValido = true;
    this.email = '';
    this.telefono = '';
    this.patente = '';
    this.password = '';
    this.confirmPassword = '';
  }

  validarRUT() {
    const rutPattern = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/; // Patrón básico para RUT
    this.rutValido = rutPattern.test(this.rut);
  }

  onRegistro() {
    if (!this.rutValido) {
      console.error('RUT inválido');
      return;
    }

    // Lógica para manejar el registro del usuario
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('RUT:', this.rut);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Patente:', this.patente);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

    // Aquí puedes agregar la lógica para enviar los datos a tu servicio de autenticación
  }
}
