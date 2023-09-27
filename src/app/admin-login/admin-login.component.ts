import { Component } from '@angular/core';
import { AlertServiceService } from '../Shared/alert-service.service';

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
constructor(private service:AlertServiceService){

}
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
    // if(this.Username == "Admin"){
    //   if(this.UserPassword == "Admin"){
    //     alert("Login Successfully");
    //     this.isCredentialsCorrect="Yes";
    //   }
    // }else{
    //   this.isCredentialsCorrect ="No"
    // }
    var body={
      Email:this.Username,
      Password:this.UserPassword
    }
    this.service.login(body).subscribe({
      next: (result) => {
        // This code will execute when the login is successful.
        alert("Login Successfully");
        this.isCredentialsCorrect = "Yes";
      },
      error: (error) => {
        // This code will execute when there's an error in the login process.
        this.isCredentialsCorrect = "No";
        console.error("Login failed:", error);
      },
      // Optionally, you can include the `complete` callback if needed.
      complete: () => {
        // This code will execute when the observable completes (if needed).
      }
    });
  }
}
