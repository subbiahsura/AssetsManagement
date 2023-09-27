import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordAlertComponent } from '../reset-password-alert/reset-password-alert.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  Email:String="";
  constructor(private Dialog : MatDialog,private http:HttpClient) { }
  apiUrlForAdminLogin="http://localhost:4003/login";
  apiUrlForCheckEmail="http://localhost:4003/checkmail";
  apiUrlForResetPassword="http://localhost:4003/ResetPassword";
  setRegisteredEmail(email:any){
    this.Email = email;
  }
  getRegisteredEmail(){
    return this.Email;
  }
  login(data:any){
    return this.http.post(this.apiUrlForAdminLogin,data);
  }
  checkmail(data:any){
    return this.http.post(this.apiUrlForCheckEmail,data);
  }
  resetPassword(data:any){
    return this.http.post(this.apiUrlForResetPassword,data);
  }
  showAlert(title:string, message:string){
    this.Dialog.open(ResetPasswordAlertComponent, {
      data: {
        title,
        message
      }
    });
  }
}
