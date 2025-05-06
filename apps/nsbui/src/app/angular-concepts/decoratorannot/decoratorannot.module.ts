import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorannotComponent } from './decoratorannot.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DecoratorannotComponent,
    children: [


    ],
  },
];


@NgModule({
  declarations: [DecoratorannotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DecoratorannotModule { }
