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
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordAlertComponent,
    SideNavigationComponent,
    DashboardComponent,
    UsersComponent,
    TopNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
