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
  emailFromForgottenPassword:any;
  constructor(private alertService:AlertServiceService){
    this.emailFromForgottenPassword=this.alertService.getRegisteredEmail();
  }
  checkPasswordMatch(){
    if(this.Password == this.ConformPassword){
      return true;
    }else{
      return false;
    }
  }
  savePassword(){
    console.log(this.emailFromForgottenPassword);
    var body={
      Email:this.emailFromForgottenPassword,
      Password:this.ConformPassword
    }
    if(!this.Password || !this.ConformPassword){
      this.requiredError=true;
    }else if(this.checkPasswordMatch()){
      this.alertService.resetPassword(body).subscribe({
        next: (result) => {
          // This code will execute when the login is successful.
          this.showAlert();
        },
        error: (error) => {
          // This code will execute when there's an error in the login process.

          console.error("Reset Password has some error", error);
        },
        // Optionally, you can include the `complete` callback if needed.
        complete: () => {
          // This code will execute when the observable completes (if needed).
        }
      })

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
