import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'registration', component: RegisterComponent },
      {
        path: 'reactive',
        component: ReactiveformsComponent,
      },
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
