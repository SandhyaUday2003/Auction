import { AppRoutingModule } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Other components
    LoginComponent, // Ensure LoginComponent is declared here
  ],
  imports: [
    // Other modules
    FormsModule,
    AppRoutingModule // Import the AppRoutingModule
  ]
})
export class AppModule {}
