import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
