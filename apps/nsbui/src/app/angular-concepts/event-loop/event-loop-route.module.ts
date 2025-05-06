import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventLoopComponent } from './event-loop.component';



const routes: Routes = [
  {
    path: '',
    component: EventLoopComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventLoopRoutingModule {}
