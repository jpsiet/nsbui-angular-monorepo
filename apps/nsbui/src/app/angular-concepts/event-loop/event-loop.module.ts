import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventLoopComponent } from './event-loop.component';
import { HttpClientModule } from '@angular/common/http';
import { EventLoopRoutingModule } from './event-loop-route.module';




@NgModule({
  declarations: [
  EventLoopComponent
  ],
  imports: [CommonModule, HttpClientModule,

    EventLoopRoutingModule],
            providers:[]
})
export class EventLoopModule {}
