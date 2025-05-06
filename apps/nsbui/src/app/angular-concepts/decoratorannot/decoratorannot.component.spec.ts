import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorannotComponent } from './decoratorannot.component';

describe('DecoratorannotComponent', () => {
  let component: DecoratorannotComponent;
  let fixture: ComponentFixture<DecoratorannotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorannotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorannotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
