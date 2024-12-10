import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  onSubmit() {
    if (this.user.username && this.user.password) {
      console.log('Login successful:', this.user);
      // Implement API call here
    } else {
      console.error('Form is invalid');
    }
  }
}