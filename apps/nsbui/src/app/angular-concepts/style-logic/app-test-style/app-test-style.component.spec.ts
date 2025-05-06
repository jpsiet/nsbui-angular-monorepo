import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestStyleComponent } from './app-test-style.component';

describe('AppTestStyleComponent', () => {
  let component: AppTestStyleComponent;
  let fixture: ComponentFixture<AppTestStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTestStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
