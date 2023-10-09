import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserNavigationComponent } from './add-user-navigation/add-user-navigation.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppRoutingModule } from '../app-routing.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { BankDetailsComponent } from './bank-details/bank-details.component';



@NgModule({
  declarations: [
    AddUserNavigationComponent,
    NewUserComponent,
    PersonalDetailsComponent,
    ProfessionalDetailsComponent,
    ContactDetailsComponent,
    BankDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    AddUserNavigationComponent,
    NewUserComponent
  ]
})
export class AddUserModule { }
