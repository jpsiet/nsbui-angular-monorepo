import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleComp1Component } from './style-comp1/style-comp1.component';
import { StyleLogicRoutingModule } from './style-logic-route.module';
import { StyleLogicComponent } from './style-logic.component';
import { StyleSmallComp1Component } from './style-small-comp1/style-small-comp1.component';
import { ThemeableButtonComponent } from './themeable-button-comp/themeable-button-comp';

import { AppTestStyleComponent } from './app-test-style/app-test-style.component';




@NgModule({
  declarations: [
    StyleLogicComponent,
    StyleComp1Component,
    ThemeableButtonComponent,
    StyleSmallComp1Component,

    AppTestStyleComponent,

  ],
  imports: [
    CommonModule,
    StyleLogicRoutingModule
  ]
})
export class StyleLogicModule { }
