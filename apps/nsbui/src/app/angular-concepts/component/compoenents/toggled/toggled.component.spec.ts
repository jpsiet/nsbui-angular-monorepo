import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggledComponent } from './toggled.component';

describe('ToggledComponent', () => {
  let component: ToggledComponent;
  let fixture: ComponentFixture<ToggledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
