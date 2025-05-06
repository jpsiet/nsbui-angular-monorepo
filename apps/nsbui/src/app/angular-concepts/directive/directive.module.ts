import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { RouterModule } from '@angular/router';
import { DirectiveRotuingModule } from './directive-rotuing.module';

import { TrackDirective } from './track.directive';
import { OnlineDirective } from './online.directive';
import { BasicTemplateComponent } from './basic-template/basic-template.component';



@NgModule({
  declarations: [
    DirectiveComponent,
   TrackDirective,

    OnlineDirective,
     BasicTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveRotuingModule,
  ]
})
export class DirectiveModule { }
