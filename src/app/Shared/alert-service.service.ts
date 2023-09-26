import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordAlertComponent } from '../reset-password-alert/reset-password-alert.component';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private Dialog : MatDialog) { }
  showAlert(title:string, message:string){
    this.Dialog.open(ResetPasswordAlertComponent, {
      data: {
        title,
        message
      }
    });
  }
}
