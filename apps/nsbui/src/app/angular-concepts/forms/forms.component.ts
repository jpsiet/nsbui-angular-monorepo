import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
export interface Comment {
  id: number;
  body: string;
  postid: number;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formGroup!: UntypedFormGroup;
  lesson: any[] = [{
    title: 'xyz',
    level: 30
  }, {
    title: 'abc',
    level: 25
  }];
  constructor(private fb: UntypedFormBuilder) {
    this.formGroup = this.fb.group({
      title: 'Hello',
      free: false,
      description: 'Test',
      address:{
        "addressLine1": "Street name 1",
        "addressLine2": "Street name 2",
        "zipCode": "1000",
        "city": "New York"
    } ,
      qantity: [1, [Validators.required, Validators.max(100)]],
      lessons: {lessons:this.lesson}

    });
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }


}
