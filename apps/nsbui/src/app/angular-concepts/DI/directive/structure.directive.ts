import {
  Directive,
  ElementRef,
  Host,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Directive({
  selector: '[stucutredir]',
  providers: [],
})
export class StructureDirective implements OnInit {
  constructor(private el: TemplateRef<any>, private vc: ViewContainerRef) {}

  @Input() set stucutredir(condition: boolean) {
    if (condition) {
      this.vc.createEmbeddedView(this.el);
    } else {
      this.vc.clear();
    }
  }

  ngOnInit(): void {}
}
