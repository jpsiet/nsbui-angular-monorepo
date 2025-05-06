import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSS3Component } from './css3.component';

describe('CSS3Component', () => {
  let component: CSS3Component;
  let fixture: ComponentFixture<CSS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
