import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWithRxjsComponent } from './angular-with-rxjs.component';

describe('AngularWithRxjsComponent', () => {
  let component: AngularWithRxjsComponent;
  let fixture: ComponentFixture<AngularWithRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWithRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
