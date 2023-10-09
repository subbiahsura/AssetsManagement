import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordAlertComponent } from './reset-password-alert/reset-password-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users-management/users/users.component';
import { UsersManagementModule } from './users-management/users-management.module';
import { AddUserModule } from './add-user/add-user.module';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordAlertComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    UsersManagementModule,
    AddUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
