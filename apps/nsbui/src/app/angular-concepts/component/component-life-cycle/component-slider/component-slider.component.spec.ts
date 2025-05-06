import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSliderComponent } from './component-slider.component';

describe('ComponentSliderComponent', () => {
  let component: ComponentSliderComponent;
  let fixture: ComponentFixture<ComponentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
