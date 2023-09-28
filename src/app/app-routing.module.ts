import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
{
  path:"login",
  component:AdminLoginComponent
},
{
  path:"forgot-password",
  component:ForgotPasswordComponent
},
{
  path:"Reset-Password/:userID/:token",
  component:ResetPasswordComponent
},
{
  path:"sideNav",
  component:SideNavigationComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
