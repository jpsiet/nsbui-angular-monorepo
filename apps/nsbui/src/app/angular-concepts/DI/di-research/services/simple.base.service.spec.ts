import { TestBed } from '@angular/core/testing';
import { SimpleBaseService } from './simple.base.service';
import { SimpleService } from './simple.service';

describe('Simple Base Service', () => {
  let service: SimpleBaseService;
  beforeEach(() => {
   // service = new SimpleBaseService();
   TestBed.configureTestingModule({ providers: [SimpleBaseService] });
   service = TestBed.inject(SimpleBaseService);
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  fit('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.Hello().subscribe((value) => {
      expect(value).toContain('DI');
      done();
    });
  });
});
