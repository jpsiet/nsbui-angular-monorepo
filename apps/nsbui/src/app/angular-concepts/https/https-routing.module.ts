import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpsComponent } from './https.component';







const routes: Routes = [
  {
    path: '',
    component: HttpsComponent,
    children: [


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingRoutingModule {}
