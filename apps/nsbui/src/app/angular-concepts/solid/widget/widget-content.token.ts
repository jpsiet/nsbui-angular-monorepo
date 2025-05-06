import { InjectionToken } from '@angular/core';
import { reloadableIF } from './widget-content.interface';
export const RELOADABLE_CONTENT = new InjectionToken<reloadableIF>(
  'reloadable-content'
);
