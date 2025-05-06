
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent
  implements OnInit, AfterViewInit
{
  constructor(private view: ViewContainerRef) {}
  @ViewChild('foo',{read:true,static:true}) template:any;
  column = [ 'name','job' ];
  data = [
    { name: 'jitendra', job: 'earn' },
    { name: 'manviya', job: 'expend' },
  ];

  ngOnInit(): void {}

 ngAfterViewInit(): void {this.view.createEmbeddedView(this.template);}

}
