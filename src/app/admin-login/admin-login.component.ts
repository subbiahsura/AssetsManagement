import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  Username:any;
  UserPassword:any;
  isCredentialsCorrect ="";


  passwordVisible: boolean = false;
  isPasswordEmpty: boolean = true; // Variable to track whether the password input is empty or not

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    // console.log(this.passwordVisible);

  }

  onPasswordInputChange() {
    // console.log(this.UserPassword)
    this.isPasswordEmpty = this.UserPassword.trim() === '';
    // console.log(this.isPasswordEmpty)
  }
  Login(){
    if(this.Username == "Admin"){
      if(this.UserPassword == "Admin"){
        alert("Login Successfully");
        this.isCredentialsCorrect="Yes";
      }
    }else{
      this.isCredentialsCorrect ="No"
    }
  }
}
