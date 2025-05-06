import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { HelloComponent } from './overlay/hello.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [],
  },
];

@NgModule({
  declarations: [MaterialComponent,MaterialViewComponent],
  imports: [

    CommonModule,
    OverlayModule,RouterModule.forChild(routes)
  ]
})
export class MaterialModule { }
