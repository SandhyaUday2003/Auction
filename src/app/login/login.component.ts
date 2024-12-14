import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule,CommonModule, FormsModule]  // Include CommonModule here
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit(loginForm:any) {
    console.log('Login successful:', this.user);
    loginForm.resetForm();
  }
}
