import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement, Inject, Injector } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';


import { of } from 'rxjs';

import { DiResearchComponent } from './di-research.component';
import { SimpleBaseService } from './services/simple.base.service';
import { SimpleService } from './services/simple.service';

describe('DiResearchComponent', () => {
  let component: DiResearchComponent;
  let fixture: ComponentFixture<DiResearchComponent>;
  let de: DebugElement;
  let simpleServiceStub: any;
  let simpleBaseService: SimpleBaseService;


  //let simpleBaseServiceSpy :jasmine.SpyObj<SimpleBaseService>
  //('SimpleBaseService', ['Hello']);

  beforeEach(
    waitForAsync(() => {
      // stub logic don't know how much time service called...
      simpleServiceStub = {
        hello: () => of('DI research works !'),
      };
     // const spy = jasmine.createSpyObj('SimpleBaseService', ['Hello']);

      TestBed.configureTestingModule({
        declarations: [DiResearchComponent],
        imports: [HttpClientModule],
        providers: [
          { provide: SimpleService, useValue: simpleServiceStub },
          { provide: SimpleBaseService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DiResearchComponent);
    component = fixture.componentInstance;
    // fixture = TestBed.createComponent(DiResearchComponent);
    // component = fixture.componentInstance;
    de = fixture.debugElement;
    simpleBaseService = TestBed.inject(SimpleBaseService);
    fixture.detectChanges();
   // simpleBaseService = TestBed.inject(SimpleBaseService);
  // simpleBaseServiceSpy = TestBed.inject(SimpleBaseService) as jasmine.SpyObj<SimpleBaseService>;
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value attribute should contain DI', () => {
    expect(component.content).toContain('DI');
  });

  //   it('h1 tag  value should be testing ', () =>
  //     expect(de.query(By.css('h1')).nativeElement.).toContain('DI'));
  // });

  it('hide content should toggle toggleContent', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggleContent();
    expect(component.hideContent).toBeFalsy();
  });

  it('hide content should toggle Async toggleContent', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.togleContentAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it('Hello Method from service stubb should return part DI ', () => {
    component.valueObs.subscribe((value) => {
      expect(value).toContain('DI');
    });
  });

//   it('Hello Method from service SPY Service Simple Base should return part DI ', () => {
//      spyOn(simpleBaseService,'getValue').and.returnValue(('Hello From Jasmine'));
//     expect(simpleBaseService.getValue).toHaveBeenCalled();
//  });
// it('testing h1 tag value ', () => {
//     let el = de.query(By.css('h1'));
// });

});
