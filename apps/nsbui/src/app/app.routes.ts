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
      {
        path: 'aggrid',
        loadChildren: () =>
          import('./ag-grid/ag-grid-concept.module').then((m) => m.AGGridConceptModule)
      },
      {
        path: 'agChart',
        loadChildren: () =>
          import('./ag-chart/ag-chart-concept.module').then((m) => m.AGChartConceptModule)
      },

    ],
  },
];
