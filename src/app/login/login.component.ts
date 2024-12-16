import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  onSubmit(loginForm:NgForm) {
    if (loginForm.valid) {
      console.log('Login successful:', this.user);
  
      // Reset the form after successful login
      loginForm.resetForm();
    } else {
      console.error('Form is invalid. Please fill all required fields correctly.');
    }
  }
}
