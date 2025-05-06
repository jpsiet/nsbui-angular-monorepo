import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectComponent } from './content-project.component';
import { BasicContentProjectComponent } from './basic/basic.content-project.component';
import { MultiContentProjectComponent } from './multi/multi.content-project.component';
import { FaInputComponent } from './fa-input/fa-input.component';

import { FaInputFinalComponent } from './fa-input-final/fa-final-input.component';
import { InputRefdirDirective } from './input-refdir.directive';



@NgModule({
  declarations: [
    ContentProjectComponent,
    BasicContentProjectComponent,
    MultiContentProjectComponent,
    FaInputComponent,
    FaInputFinalComponent,
    InputRefdirDirective
  ],
  imports: [
    ContentProjectionRoutingModule,
    CommonModule,

  ],exports:[
    FaInputFinalComponent
  ]
})
export class ContentProjectionModule { }
