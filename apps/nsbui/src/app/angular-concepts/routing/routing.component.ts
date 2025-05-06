import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {

  constructor(private route:Router){}

  handleRouting(){
    this.route.navigate(['routing','home',5])
  }

}
