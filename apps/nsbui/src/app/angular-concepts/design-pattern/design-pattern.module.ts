import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';

const routes: Routes = [
  {
    path: '',
    component: DesignPatternComponent,
    children: [],
  },
];

@NgModule({
  declarations: [DesignPatternComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [FactoryComponent],
})
export class DesignPatternModule {}
