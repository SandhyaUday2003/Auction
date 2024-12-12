import { AppRoutingModule } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordrecoveryComponent } from './app/passwordrecovery/passwordrecovery.component';
import { SignupComponent } from './app/signup/signup.component';

@NgModule({
  declarations: [
    // Other components
    PasswordrecoveryComponent,
    SignupComponent,
    LoginComponent 
  ],
  imports: [
    // Other modules
    FormsModule,
    AppRoutingModule
  ]
})
export class AppModule {}
