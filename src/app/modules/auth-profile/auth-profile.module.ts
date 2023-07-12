import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileRoutingModule } from './auth-profile-routing.module';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthProfileComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthProfileComponent,
    LoginComponent,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthProfileModule {}
