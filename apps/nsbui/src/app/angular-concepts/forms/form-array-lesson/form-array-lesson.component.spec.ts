import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayLessonComponent } from './form-array-lesson.component';

describe('FormArrayLessonComponent', () => {
  let component: FormArrayLessonComponent;
  let fixture: ComponentFixture<FormArrayLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
