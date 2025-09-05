import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers-cont',
  template: `

  <!-- <mat-tab-group mat-stretch-tabs="false"
  *ngFor="let stream of streams"  mat-align-tabs="center">


      <app-teacher-tabs [stream]="stream"></app-teacher-tabs>
</mat-tab-group> -->
  `
})
export class TeachersContComponent {
  streams: string[] = ['Science', 'Arts', 'Commerce'];
}
