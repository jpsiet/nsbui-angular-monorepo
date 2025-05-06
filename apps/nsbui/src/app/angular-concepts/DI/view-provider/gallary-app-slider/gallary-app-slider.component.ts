import { Component, OnInit } from '@angular/core';
import { GallaryServiceService } from '../gallary-service.service';

@Component({
  selector: 'app-gallary-slider',
  templateUrl: './gallary-app-slider.component.html',
  styleUrls: ['./gallary-app-slider.component.scss']
})
export class GallaryAppSliderComponent implements OnInit {

  constructor( private gallaryService:GallaryServiceService) { }

  ngOnInit(): void {
   this.gallaryService.hi(" ===  slider ==>");
  }

}
