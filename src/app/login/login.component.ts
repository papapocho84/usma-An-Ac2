import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];



  validateLogin(userF: string, passwordF: string) {
    //Esta linea de codigo valida si en el arreglo users contiene un objeto con el usuario y contraseña enviada.
    const user = this.users.find(user => user.username === userF && user.password === passwordF);
    if (user) {
      this.message = 'Ingreso correctamente';

    } else {
      this.message = 'Usuario o clave invalido';
    }
  }

  clearForm() {
    this.username = '';
    this.password = '';
    this.message = '';
  }
}
