import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'registration', component: RegisterComponent },
      
      {
        path: 'register',
        component: SecondComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:"forgotpassword",
        component:ForgotComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
