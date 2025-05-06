import { Component, OnInit } from '@angular/core';
import { FactoryComponent } from '../factory/factory.component';

@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.scss']
})
export class DesignPatternComponent implements OnInit {

  constructor( private factoryComp:FactoryComponent) { }
    comp:any;
  ngOnInit(): void {

    this.comp = new FactoryComponent().createButton('ios');
    console.log(this.comp);
  }

}
