import { Component } from '@angular/core';
import { AlertServiceService } from '../Shared/alert-service.service';
import { FunctionalitiesService } from '../Shared/functionalities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ismenuclicked:any;
  navbarstatus:any;
  isUsermenuclicked=false;
  constructor(private service:FunctionalitiesService){
    this.isUsermenuclicked = this.service.checkUsersLiClicked();
    console.log("User menuclick status from service = ", this.isUsermenuclicked);
    // while(this.isUsermenuclicked==true){
    //   this.isUsermenuclicked = this.service.checkUsersLiClicked();
    // }
  }
}
