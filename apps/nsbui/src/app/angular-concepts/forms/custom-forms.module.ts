import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormRotuingModule } from './custom-form-route.module';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { QuanityComponent } from './quanity/quanity.component';
import {MatIconModule} from '@angular/material/icon';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormArrayLessonComponent } from './form-array-lesson/form-array-lesson.component';


@NgModule({
  declarations: [
  FormsComponent,
  QuanityComponent,
  AddressFormComponent,
  FormArrayLessonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    CustomFormRotuingModule,
  ],
})
export class CustomFormsModule {}
