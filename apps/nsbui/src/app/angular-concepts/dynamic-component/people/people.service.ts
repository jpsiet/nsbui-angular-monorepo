import { Injectable } from '@angular/core';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() {}

  getPeople() {
    return of([
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    ]);
  }
}
