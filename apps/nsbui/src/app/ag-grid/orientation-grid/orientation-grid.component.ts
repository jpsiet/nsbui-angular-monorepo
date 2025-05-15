import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef, ColGroupDef, GridOptions, GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-pivot-grid',
  templateUrl: './orientation-grid.component.html',
  styleUrls: ['./orientation-grid.component.scss'],
  standalone: true,
  imports: [AgGridModule],
})
export class orientationGridComponent implements OnInit {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  rawData = [
    { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '10th', marks: 88 },
    { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '12th', marks: 91 },
    { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '10th', marks: 92 },
    { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '12th', marks: 95 },
    { state: 'Texas', university: 'UT Austin', ethnicity: 'white', grade: '12th', marks: 85 },
    { state: 'Texas', university: 'UT Austin', ethnicity: 'asian', grade: '10th', marks: 90 },
  ];

  columnDefs: ColDef[] = [];
  rowData: any[] = [];

  isSwapped = false;

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
      headerName: 'Group',
      cellRendererParams: { suppressCount: true }
    }
  };
  gridApi: any;

  ngOnInit() {
    this.setDefaultLayout();
  }

  // ✅ Default: Group by state → university
  setDefaultLayout() {
    const grouped = new Map();

    this.rawData.forEach(row => {
      const key = `${row.state}|${row.university}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          state: row.state,
          university: row.university
        });
      }
      const flatRow = grouped.get(key);
      flatRow[`${row.ethnicity}_${row.grade}`] = row.marks;
    });

    this.rowData = Array.from(grouped.values());

    this.columnDefs = [
      { field: 'state', rowGroup: true, hide: true },
      { field: 'university', rowGroup: true, hide: true },
      {
        headerName: 'White',
        children: [
          { field: 'white_10th', headerName: '10th Grade' },
          { field: 'white_12th', headerName: '12th Grade' }
        ]
      } as ColGroupDef,
      {
        headerName: 'Asian',
        children: [
          { field: 'asian_10th', headerName: '10th Grade' },
          { field: 'asian_12th', headerName: '12th Grade' }
        ]
      } as ColGroupDef
    ];
  }

  // ✅ Swapped: Group by ethnicity → grade, columns should be state → university
 setSwappedLayout() {
  // 1. Build row data grouped by ethnicity and grade
  const grouped = new Map();

  this.rawData.forEach(row => {
    const key = `${row.ethnicity}|${row.grade}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        ethnicity: row.ethnicity,
        grade: row.grade
      });
    }
    const flatRow = grouped.get(key);
    // Use state and university as a nested key
    flatRow[`${row.state}|||${row.university}`] = row.marks;
  });

  this.rowData = Array.from(grouped.values());

  // 2. Build unique states and universities for column groups
  const stateUniMap = new Map<string, Set<string>>();
  this.rawData.forEach(row => {
    if (!stateUniMap.has(row.state)) {
      stateUniMap.set(row.state, new Set());
    }
    stateUniMap.get(row.state)!.add(row.university);
  });

  // 3. Build columnDefs with nested groups: State → University
  const stateGroups: ColGroupDef[] = [];
  for (const [state, universities] of stateUniMap.entries()) {
    stateGroups.push({
      headerName: state,
      children: Array.from(universities).map(university => ({
        field: `${state}|||${university}`,
        headerName: university
      }))
    });
  }

  this.columnDefs = [
    { field: 'ethnicity', rowGroup: true, hide: true },
    { field: 'grade', rowGroup: true, hide: true },
    ...stateGroups
  ];
}

onGridReady(params: any) {
  this.gridApi = params.api;

}



  toggleGrouping() {
    this.isSwapped = !this.isSwapped;

    // Step 1: set data layout
    if (this.isSwapped) {
      this.setSwappedLayout();
    } else {
      this.setDefaultLayout();
    }

    // Step 2: Apply new colDefs and rowData with a small delay
    setTimeout(() => {
      //const api = this.agGrid.api;
      this.gridApi.setColumnDefs(this.columnDefs);
      this.gridApi.setRowData(this.rowData);
    });
  }
}
