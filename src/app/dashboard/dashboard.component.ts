import { Component } from '@angular/core';
import { AlertServiceService } from '../Shared/alert-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ismenuclicked:any;
  navbarstatus:any;
  constructor(private service:AlertServiceService){}
  // isMenuClicked(){
  //   this.navbarstatus=this.service.getSideNavigationBarStatus();
  //   this.ismenuclicked=!this.navbarstatus
  //   console.log(this.ismenuclicked)
  // }
}
