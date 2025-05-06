import { Directive, Input } from '@angular/core';


@Directive({
  selector: '[appWidgetBase]'
})
export class WidgetBase{
 constructor() {}
  @Input() title: string = '';
  onExportJson() {
   console.log("exporting widget data")
  }

}
