import { Component, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-array-lesson',
  templateUrl: './form-array-lesson.component.html',
  styleUrls: ['./form-array-lesson.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormArrayLessonComponent,
    },
  ],
})
export class FormArrayLessonComponent implements OnInit, ControlValueAccessor {
  formGroup!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.formGroup = this.fb.group({
      lessons: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get lessons() {
    return this.formGroup.controls['lessons'] as UntypedFormArray;
  }

  addLesson(title: String = '', level: String = 'beginner') {
    const lessonForm = this.fb.group({
      title: [title, Validators.required],
      level: [level, Validators.required],
    });
    this.lessons.push(lessonForm);
  }

  addLessons(val: any[]) {
    val.forEach((lesson) => {
      this.addLesson(lesson?.['title'], lesson?.['beginner']);
    });
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  onTouched: Function = () => {};

  onChangeSubs: Subscription[] = [];

  ngOnDestroy() {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  registerOnChange(onChange: any) {
    const sub = this.formGroup.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
    //  console.log
    const sub1 = this.formGroup.valueChanges.subscribe(console.log);
    this.onChangeSubs.push(sub1);
  }

  registerOnTouched(onTouched: Function) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  writeValue(val: any) {
    if (val) {
      //this.formGroup.setValue(value, {emitEvent: false});
      this.addLessons(val.lessons);
    }
  }
}
