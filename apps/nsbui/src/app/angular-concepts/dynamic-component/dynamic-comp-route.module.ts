import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentComponent } from './dynamic-component.component';



const routes: Routes = [
  {
    path: '',
    component: DynamicComponentComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicComponentRoutingModule {}
