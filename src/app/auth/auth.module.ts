import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    RegisterComponent,
    ReactiveformsComponent,
    SecondComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [
    RegisterComponent,
    ReactiveformsComponent,
    SecondComponent,
    LoginComponent,
  ],
})
export class AuthModule {}
