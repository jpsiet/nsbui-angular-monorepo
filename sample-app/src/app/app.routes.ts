import { Routes } from '@angular/router';
import { TailsWindsbasicComponent } from './tailwinds/tailwind-sandbox-basic/tailwindis-basic.component';
import { EmailSubscribeTlComponent } from './tailwinds/tailwinds-email-subscribe/email-subscribe-tl.component';
import { PriceGridTlComponent } from './tailwinds/tailwinds-pricing-grids/pricing-grid-tl.component';
import { TailsWindsVanUtitlityComponent } from './tailwinds/vanila/utility-first/tailwind-utility-first.component';

export const routes: Routes = [
  {
    path: '',
    component: TailsWindsbasicComponent,
    children: [
      {
        path: 'email',
        // direct import
        component: EmailSubscribeTlComponent,
      },
      {
        path: 'pgrid',
        component: PriceGridTlComponent,
      },
      {
        path: 'basics',
        component: TailsWindsbasicComponent,
        children: [
          { path: 'tailwind-utitlity-first',
            // Lazy Load Import
            loadComponent: () =>
              import('./tailwinds/vanila/utility-first/tailwind-utility-first.component').then(
                (m) => m.TailsWindsVanUtitlityComponent
              )},
          // { path: 'tailwind-colors', component: ColorsComponent },
          // { path: 'tailwind-container-spacing', component: ContainerSpacingComponent },
          // { path: 'tailwind-typography', component: TypographyComponent },
          // { path: 'tailwind-sizing', component: SizingComponent },
          // { path: 'tailwind-layout-positions', component: LayoutPositionsComponent },
          // { path: 'tailwind-background-shadows', component: BackgroundShadowsComponent },
          // { path: 'tailwind-borders', component: BordersComponent },
          // { path: 'tailwind-filters', component: FiltersComponent },
          // { path: 'tailwind-interactivity', component: InteractivityComponent },
          // { path: 'tailwind-breakpoints', component: BreakpointsComponent },
          // { path: 'tailwind-columns', component: ColumnsComponent },
          // { path: 'tailwind-flex', component: FlexComponent },
          // { path: 'tailwind-grid', component: GridComponent },
          // { path: 'tailwind-animation', component: AnimationComponent },
          // { path: 'tailwind-customization', component: TailsWindsVanCustomizationComponent },
          // { path: 'tailwind-darkMode', component: TailsWindsVanDarkModeComponent },
        ],
      },
    ],
  },
];
