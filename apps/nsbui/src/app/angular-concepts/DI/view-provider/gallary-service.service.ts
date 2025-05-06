import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GallaryServiceService {
  private pre_fix: string = 'Gallery level';

  public onLine = true;

  constructor() {
    setInterval(() => {
      this.onLine = Math.random() > 0.5;
    }, 1000);
  }

  hi(msg: string) {
    console.log(`${this.pre_fix}:${msg}`);
  }
}
