import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'nsbui',
        loadChildren: () =>
          import('./nsb-public/nsb-public.module').then((m) => m.NSBPublicModule)
      },
     ],
  },
];
