import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StudentService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     providers:[TestService],
     imports:[HttpClientTestingModule]

    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test be SetTime out', () => {
     const result = service.doWork();
     console.log("do work" + result);
     expect(true).toEqual(true);
  });
});
