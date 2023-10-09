import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ismenuclicked:any;
  navbarstatus:any;
  isUsermenuclicked=false;
  constructor(){

    // while(this.isUsermenuclicked==true){
    //   this.isUsermenuclicked = this.service.checkUsersLiClicked();
    // }
  }
}
