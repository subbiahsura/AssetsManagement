import { Component } from '@angular/core';
import { FunctionalitiesService } from '../Shared/functionalities.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
isUsermenuClicked=false;
constructor(private service: FunctionalitiesService){
this.isUsermenuClicked = this.service.checkUsersLiClicked();
}
}
