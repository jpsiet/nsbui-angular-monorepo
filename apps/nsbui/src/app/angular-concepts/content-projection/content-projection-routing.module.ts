import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectComponent } from './content-project.component';


const routes:Routes = [{
  path:'',
  component:ContentProjectComponent
}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContentProjectionRoutingModule { }
