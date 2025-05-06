import { InjectionToken } from '@angular/core';

export interface AppConfig {
   logger: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    logger: false,
  }),
});

export const SAMPLE_CONFIG = new InjectionToken('sample.config',
)
