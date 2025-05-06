import { Component, OnInit } from '@angular/core';
import { GallaryServiceService } from '../gallary-service.service';

@Component({
  selector: 'app-gallary-app',
  templateUrl: './gallary-app.component.html',
  styleUrls: ['./gallary-app.component.scss'],
  providers:[GallaryServiceService]
})
export class GallaryAppComponent implements OnInit {

  constructor(private gallaryService:GallaryServiceService) { }

  ngOnInit(): void {
    this.gallaryService.hi(" ==== APPP ====");
  }

}
