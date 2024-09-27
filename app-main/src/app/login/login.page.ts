import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Inicializamos email
  password: string = ''; // Inicializamos password

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes agregar tu lógica de autenticación
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Ejemplo de redirección después de iniciar sesión
    // this.router.navigate(['/home']);
  }
}
