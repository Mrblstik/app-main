import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email: string;

  constructor() {
    this.email = '';
  }

  onRecuperar() {
    console.log('Enviando correo para recuperar contraseña a:', this.email);
    // Aquí puedes agregar la lógica para enviar el correo de recuperación
  }
}
