import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  ismenuclicked:any;
  isMenuClicked(){
    this.ismenuclicked=!this.ismenuclicked
    console.log(this.ismenuclicked)
    // this.ismenuclicked=false
    // console.log(this.ismenuclicked)
  }
}
