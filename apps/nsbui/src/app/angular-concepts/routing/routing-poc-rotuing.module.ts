import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';






const routes: Routes = [
  {
    path: '',
    component:RoutingComponent,
    children: [
   {
    path: 'home/:id',
    pathMatch:'full',
    component: RoutingHomeComponent,
   },
   {
    path: 'home',
    component: RoutingHomeComponent,
    pathMatch:'full'
   },
   {
    path: '**',
    component: RoutingHomeComponent,

   }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingPocRoutingModule {}
