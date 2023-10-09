import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { OverallDashboardComponent } from './overall-dashboard/overall-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TopNavbarComponent,
    SideNavigationComponent,
    OverallDashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    DashboardComponent,
    TopNavbarComponent,
    SideNavigationComponent,
    AppRoutingModule
  ]
})

export class UsersManagementModule { }
