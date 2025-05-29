import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports: [ RouterModule,MatDialogModule],
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nsbui';
}
