import {
  AfterViewInit,
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[threeStr]',
})
export class ThreeStrDirective {
  constructor(
    private el: ElementRef,
    private viewContRef: ViewContainerRef,
    private tempRef: TemplateRef<any>
  ) {
    console.log(this.el.nativeElement);
    console.log('Hello Three ');
  }
  //  Need to check template directive for external data
  ngAfterViewInit() {
    // this.viewContRef.createEmbeddedView(this.tempRef,{
    //   messageStr:'Hello'
    // });

  }
}
