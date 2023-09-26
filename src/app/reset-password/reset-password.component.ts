import { Component } from '@angular/core';
import { AlertServiceService } from '../Shared/alert-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  requiredError :boolean=false;
  passwordVisible: boolean = false;
  conformPasswordVisible: boolean = false;
  Password:any;
  ConformPassword:any;
  isPasswordEmpty: boolean = true;
  isCPasswordEmpty:boolean=true;
  constructor(private alertService:AlertServiceService){}
  checkPasswordMatch(){
    if(this.Password == this.ConformPassword){
      return true;
    }else{
      return false;
    }
  }
  savePassword(){
    if(!this.Password || !this.ConformPassword){
      this.requiredError=true;
    }else if(this.checkPasswordMatch()){
      this.showAlert();
    }else{
      this.checkPasswordMatch();
    }

  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConformPasswordVisibility() {
    this.conformPasswordVisible = !this.conformPasswordVisible;
  }
  onPasswordInputChange() {
    this.isPasswordEmpty = this.Password.trim() === '';
  }
  onPasswordInputChangeForCPassword() {
    this.isCPasswordEmpty = this.ConformPassword.trim() === '';
  }
  showAlert() {
    this.alertService.showAlert('Successful Password Reset!', 'Now you can use your New Password to login to your account.');
  }
}
