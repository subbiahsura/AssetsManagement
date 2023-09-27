import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from '../Shared/alert-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  Email:string="";
  isRegisteredEmail=true;
  isEmpty=false;
  istouched:boolean=false;

  constructor(private Router:Router,private service:AlertServiceService){

  }
  isInput(){
    this.istouched=true;
  }
  onSubmit(){
    if(this.Email != ""){
    if(this.Email.endsWith("@entrans.io")){
      // this.isRegisteredEmail=true;
      // alert("Mail Sent Succesfully");
      // this.Router.navigate(['/Reset-Password'])
      var data={
        Email:this.Email
      }
      this.service.checkmail(data).subscribe({
        next: (result) => {
          // This code will execute when the login is successful.
          this.isRegisteredEmail=true;
          // this.service.setRegisteredEmail(this.Email);
          alert("Mail Sent Succesfully");
          // this.Router.navigate(['/Reset-Password'])
        },
        error: (error) => {
          // This code will execute when there's an error in the login process.
          this.isRegisteredEmail=false;
          console.error("mail checked failed", error);
        },
        // Optionally, you can include the `complete` callback if needed.
        complete: () => {
          // This code will execute when the observable completes (if needed).
        }
      })

    }else{
      this.isRegisteredEmail=false;
      this.isEmpty=false;
      console.log(this.Email);
    }
  }else{
    this.isEmpty=true;
  }
}
}
