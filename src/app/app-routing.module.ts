import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/register',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:"dashboard",
    canActivate:[AuthGuard],
    component:DashboardComponent
  },
  {
    path:"product/:id",
    component:ProddetailsComponent
  },
  {
    path:"mycart",
    component:CartComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
