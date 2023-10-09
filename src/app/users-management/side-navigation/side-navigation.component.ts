import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  clicked=false;
  isNavOpen=true;
  UsersLIClicked=false;
  constructor(){}
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
    // this.UsersLIClicked=true;
    // console.log("Users Menu clickstatus = ",this.UsersLIClicked)
    // this.service.isUsersLIclicked(this.UsersLIClicked);
    // console.log("check its is updated in service = ",this.service.checkUsersLiClicked())
    // this.router.navigate(['/dashboard/users']);
  }
  resetUsersClicked() {
    this.UsersLIClicked = false;

  }

}
