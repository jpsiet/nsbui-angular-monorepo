import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { StudentService } from '../../services/student.service';
import { AddStudentsComponent } from '../add-students/add-students.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Student } from 'apps/nsbui/src/generated/model/student';


function actionCellRenderer(params: any) {
  let eGui = document.createElement('div');

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell: any) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  eGui.innerHTML = `
  <button class="action-button edit"   data-action="update" > update  </button>
  <button class="action-button delete"  data-action="delete" > delete </button>
`;

  return eGui;
}

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.scss'],
})
export class StudentGridComponent implements OnInit, OnChanges {
  columnDefs: ColDef[] = [
    { field: 'rollNumber', headerName: 'Student ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'grade', headerName: 'Grade' },
    {
      headerName: 'action',
      minWidth: 150,
      cellRenderer: actionCellRenderer,
      editable: false,
      colId: 'action',
    },
  ];
  @Input() updateGrid = false;

  rowData: any = [];
  constructor(private studentService: StudentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['updateGrid'].currentValue === true) {
      this.fetchStudents();
    }
  }
  students: any;

  onCellClicked(params: any) {
    // Handle click event for action cells
    if (
      params.column.colId === 'action' &&
      params.event.target.dataset.action
    ) {
      let action = params.event.target.dataset.action;

      if (action === 'delete') {
        this.studentService
          .deleteStudentsByID(params.data.id)
          .subscribe((data: any) => {
            alert('stuent deleted with ID' + data['id']);
            this.fetchStudents();
          });
      }

      if (action === 'update') {
        // const dialogRef = this.studentService.openStudentDialog(params.data,AddStudentsComponent);
        // (dialogRef.componentInstance as any).done.subscribe((data:any) => {
        //   this.fetchStudents();
        //   dialogRef.close();
        // });
      }
    }
  }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudentList().subscribe((val:Array<Student>) => {

      this.rowData = val;
    },err=>{
      console.log(err);
     });
  }
}
