import { ChangeDetectorRef, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { wideRowData } from './mock-data';


@Component({
  selector: 'app-student-summary-grid',
  templateUrl: './student-mark-summary-stg-grid.component.html',
  styleUrls: ['./student-mark-summary-stg-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class StudentMarkSummarySTGGridComponent {
    public gridOptionsState: GridOptions = { animateRows: true, };




  constructor(private cdRef: ChangeDetectorRef) {
    this.setCategorySubcategoryTree();
  }

  // Category > SubCategory tree, columns for each year
setCategorySubcategoryTree() {

  const columnDefs = [
  { field: 'state', rowGroup: true, hide: true },
  {
    headerName: 'White',
    children: [
      { field: 'white_10th', headerName: '10th' },
      { field: 'white_12th', headerName: '12th' }
    ]
  },
  {
    headerName: 'Asian',
    children: [
      { field: 'asian_10th', headerName: '10th' },
      { field: 'asian_12th', headerName: '12th' }
    ]
  }
];


  const defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  const autoGroupColumnDef =  {
    headerName: '',
    field: 'university',

   cellRendererParams: {
      suppressCount: true ,
    }
  }
const newRowData = wideRowData;

  this.gridOptionsState =  {
  columnDefs:columnDefs,
  rowData: newRowData,
  animateRows: true,
  groupDisplayType: 'singleColumn',
  defaultColDef: defaultColDef,
  autoGroupColumnDef:autoGroupColumnDef
};


}

isTransposed = false;

toggleTranspose() {
  this.isTransposed = !this.isTransposed;

    this.setCategorySubcategoryTree();

}




}
