import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private Router:Router){

  }
  isInput(){
    this.istouched=true;
  }
  onSubmit(){
    if(this.Email != ""){
    if(this.Email.endsWith("@entrans.io")){
      this.isRegisteredEmail=true;
      alert("Mail Sent Succesfully");
      this.Router.navigate(['/Reset-Password'])

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
