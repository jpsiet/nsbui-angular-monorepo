import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComp1Component } from './style-comp1.component';

describe('StyleComp1Component', () => {
  let component: StyleComp1Component;
  let fixture: ComponentFixture<StyleComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
