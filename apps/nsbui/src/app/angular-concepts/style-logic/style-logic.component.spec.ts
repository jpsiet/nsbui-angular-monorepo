import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleLogicComponent } from './style-logic.component';

describe('StyleLogicComponent', () => {
  let component: StyleLogicComponent;
  let fixture: ComponentFixture<StyleLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
