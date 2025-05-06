import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss'],
})
export class AddStudentsComponent implements OnInit {
  @Output() done: EventEmitter<any> = new EventEmitter();
  constructor(
    private dialogRef: MatDialogRef<AddStudentsComponent>,
    private studetnService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    const name =
      this.profileForm.value.firstName + '-' + this.profileForm.value.lastName;

    this.studetnService.addStudent({ name }).subscribe((data) => {
      console.log(data);
      this.done.emit('true');
    });
  }

  ngOnInit(): void {
   this.prePopulateWithData();
  }

  prePopulateWithData(){
    if (this.data) {
      const name = this.data.name;
      const namesSplit = name.split('-');
      let firstName = '';
      let lastName = '';
      if (namesSplit.lenngth > 1) {
        firstName = namesSplit[0];
        lastName = namesSplit[1];
      } else {
        firstName = name.slice(0, 4);
        lastName = name.slice(4, name.length);
      }
      this.profileForm.setValue({ firstName, lastName });
    }
  }

}
