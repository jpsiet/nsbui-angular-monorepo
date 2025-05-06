import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleLogicComponent } from './style-logic.component';


const routes: Routes = [
  {
    path: '',
    component: StyleLogicComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleLogicRoutingModule {}
