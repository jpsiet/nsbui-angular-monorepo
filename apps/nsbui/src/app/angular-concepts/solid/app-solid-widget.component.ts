import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-solid-widget',
  templateUrl: './app-solid-widget.component.html',
  styles: [
    `
      .solid-content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    `,]
})
export class AppSolidWidgetComponent implements OnInit {

  @Input() title: string = ''
  ngOnInit(): void { }
}
