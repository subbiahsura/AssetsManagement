import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {
UsersLiclicked=false;
constructor() { }
isUsersLIclicked(data:any){
this.UsersLiclicked = data;
}
checkUsersLiClicked(){
  return this.UsersLiclicked
}

}
