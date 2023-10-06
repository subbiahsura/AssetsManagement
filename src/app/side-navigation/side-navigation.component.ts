import { Component } from '@angular/core';
import { AlertServiceService } from '../Shared/alert-service.service';
import { FunctionalitiesService } from '../Shared/functionalities.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  clicked=false;
  isNavOpen=true;
  UsersLIClicked=false;
  constructor(private service : FunctionalitiesService){}
  isclicked(){
    this.clicked=!this.clicked;
  }
  // hideNavigationBar(){
  //   if(this.isNavOpen==true){
  //     this.service.SetSidenavigationbarStatus(!this.isNavOpen);
  //     console.log(this.service.getSideNavigationBarStatus())
  //     // console.log(this.isNavOpen);
  //     this.isNavOpen=!this.isNavOpen
  //     console.log(this.isNavOpen);
  //   }else
  //   this.isNavOpen=!this.isNavOpen
  //   console.log(this.isNavOpen)
  // }
  usersClicked(){
    this.UsersLIClicked=true;
    this.service.isUsersLIclicked(this.UsersLIClicked);
  }
  resetUsersClicked() {
    this.UsersLIClicked = false;
    this.service.isUsersLIclicked(this.UsersLIClicked);
  }
}
