import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users-management/users/users.component';
import { TopNavbarComponent } from './users-management/top-navbar/top-navbar.component';
import { DashboardComponent } from './users-management/dashboard/dashboard.component';
import { SideNavigationComponent } from './users-management/side-navigation/side-navigation.component';
import { OverallDashboardComponent } from './users-management/overall-dashboard/overall-dashboard.component';
import { AddUserNavigationComponent } from './add-user/add-user-navigation/add-user-navigation.component';
import { NewUserComponent } from './add-user/new-user/new-user.component';
import { PersonalDetailsComponent } from './add-user/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './add-user/professional-details/professional-details.component';
import { ContactDetailsComponent } from './add-user/contact-details/contact-details.component';
import { BankDetailsComponent } from './add-user/bank-details/bank-details.component';


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
  path:"topNav",
  component:TopNavbarComponent
},
{
  path:"dashboard",
  component:OverallDashboardComponent,
  children: [
    { path: 'users', component: UsersComponent },
    {path: 'dashboardcontent', component: DashboardComponent,}, // Child route
    {path: "addUser", component: NewUserComponent,
    children:[
      {path: "",  pathMatch: 'full',
      redirectTo: 'personalDetails'},
      {path: "personalDetails", component: PersonalDetailsComponent,},
      {path: "professionalDetails", component: ProfessionalDetailsComponent,},
      {path: "contactDetails", component: ContactDetailsComponent,},
      {path: "bankDetails", component: BankDetailsComponent,},
    ]
    },

  ],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
