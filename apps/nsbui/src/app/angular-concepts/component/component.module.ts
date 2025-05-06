import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedCompComponent } from './advanced-comp/advanced-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { ToggledComponent } from './compoenents/toggled/toggled.component';

const routes:Routes = [{
  path:'',
  component:AdvancedCompComponent
}]

@NgModule({
  declarations: [AdvancedCompComponent, ToggledComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentModule { }
