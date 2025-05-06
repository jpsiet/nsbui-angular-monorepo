import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSchdulerComponent } from './progress-schduler.component';

describe('ProgressSchdulerComponent', () => {
  let component: ProgressSchdulerComponent;
  let fixture: ComponentFixture<ProgressSchdulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSchdulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSchdulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
