import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-alert',
  templateUrl: './reset-password-alert.component.html',
  styleUrls: ['./reset-password-alert.component.scss']
})
export class ResetPasswordAlertComponent {
  @Input() title: string="";
  @Input() message: string="";

  constructor(private router:Router,
    public dialogRef: MatDialogRef<ResetPasswordAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.title = data.title;
      this.message = data.message;
    }
  }
  Login() {
    // this.router.navigate(['/login']);
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
