import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent {
  checkboxChecked: boolean = false;

  toggleDivVisibility() {
    this.checkboxChecked = !this.checkboxChecked;
  }
}
