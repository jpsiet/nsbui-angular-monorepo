import { ChangeDetectorRef, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { wideRowData } from './mock-data';


@Component({
  selector: 'app-student-summary-eth-grid',
  templateUrl: './student-mark-summary-eth-grid.component.html',
  styleUrls: ['./student-mark-summary-eth-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class StudentMarkSummaryETHGridComponent {

 rawData = [
    { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '10th', marks: 88 },
    { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '12th', marks: 91 },
    { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '10th', marks: 92 },
    { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '12th', marks: 95 },
    { state: 'Texas', university: 'UT Austin', ethnicity: 'white', grade: '12th', marks: 85 },
    { state: 'Texas', university: 'UT Austin', ethnicity: 'asian', grade: '10th', marks: 90 },
  ];

  columnDefs: (ColDef | ColGroupDef)[] = [];
  rowData: any[] = [];
  gridOptions: GridOptions = {
    groupDisplayType: 'singleColumn',
    animateRows: true,
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
      flex: 1,
      minWidth: 120
    },
    autoGroupColumnDef: {
      headerName: '',
      field:'grade',
      cellRendererParams: {
        suppressCount: true

      }
    }
  };

  ngOnInit() {
    this.setupMarksSummaryGrid();
  }

  setupMarksSummaryGrid() {
    // 1. Get unique states and universities
    const states = Array.from(new Set(this.rawData.map(d => d.state)));
    const universities = Array.from(new Set(this.rawData.map(d => d.university)));
    const grades = Array.from(new Set(this.rawData.map(d => d.grade)));

    // 2. Build rowData: one row per ethnicity/grade
    const ethnicities = Array.from(new Set(this.rawData.map(d => d.ethnicity)));
    const rowData: any[] = [];
    ethnicities.forEach(ethnicity => {
      grades.forEach(grade => {
        const row: any = { ethnicity, grade };
        states.forEach(state => {
          universities.forEach(university => {
            const found = this.rawData.find(d =>
              d.state === state &&
              d.university === university &&
              d.ethnicity === ethnicity &&
              d.grade === grade
            );
            row[`${state}|||${university}`] = found ? found.marks : null;
          });
        });
        rowData.push(row);
      });
    });
    this.rowData = rowData;

    // 3. Build columnDefs: state group → university columns
    const stateGroups: ColGroupDef[] = states.map(state => ({
      headerName: state,
      children: universities
        .filter(u => this.rawData.some(d => d.state === state && d.university === u))
        .map(university => ({
          field: `${state}|||${university}`,
          headerName: university
        }))
    }));

    this.columnDefs = [
      { field: 'ethnicity', rowGroup: true, hide: true },
        ...stateGroups
    ];
  }
}
