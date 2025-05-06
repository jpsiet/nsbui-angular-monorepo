import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NewsletterComponent } from './newsletter.component';
import { ChangeDetectionRoutingModule } from './change-detection-rotuing.module';



@NgModule({
  declarations: [
   HomeComponent,
   NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChangeDetectionRoutingModule
  ]
})
export class ChangeDetectionModule { }
