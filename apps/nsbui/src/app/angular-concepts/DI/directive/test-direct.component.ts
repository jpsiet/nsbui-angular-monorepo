import { Template } from '@angular/compiler/src/render3/r3_ast';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-test-direct',
  templateUrl: './test-direct.component.html',
  styleUrls: ['./test-direct.component.scss']
})
export class TestDirectComponent implements OnInit,AfterViewInit {

  @ViewChild('template', { static: true })
  template!: TemplateRef<any>;
   loadChild = false;
  constructor(private view:ViewContainerRef,private cd:ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    // this.view.createEmbeddedView(this.template,{message:'Hello Jitendra  from component context'});
    // this.cd.detectChanges();
    // this.view.createEmbeddedView(this.template);
    // this.view.createEmbeddedView(this.template);
    // this.view.createEmbeddedView(this.template);
  }

  ngOnInit(): void {
  }
  handleStrTriggerChild(){
    this.loadChild = !this.loadChild;
    alert(this.loadChild);
  }

}
