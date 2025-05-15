import { ChangeDetectorRef, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { wideRowData } from './mock-data';


@Component({
  selector: 'app-student-summary-grid',
  templateUrl: './stdent-summary-grid.component.html',
  styleUrls: ['./stdent-summary-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class StudentSummaryGridComponent {
    public gridOptions: GridOptions = { animateRows: true, treeData: true };



  constructor(private cdRef: ChangeDetectorRef) {
    this.setCategorySubcategoryTree();
  }

  // Category > SubCategory tree, columns for each year
setCategorySubcategoryTree() {

  const columnDefs = [
  { field: 'state', rowGroup: true, hide: true },
  { field: 'university', rowGroup: true, hide: true },
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
    cellRendererParams: {
      suppressCount: true // 💡 This hides the count
    }
  }
const newRowData = wideRowData;
  this.gridOptions =  {
  columnDefs:columnDefs,
  rowData: newRowData,
  animateRows: true,
  groupDisplayType: 'singleColumn',
  defaultColDef: defaultColDef,
  autoGroupColumnDef:autoGroupColumnDef
};


}

  // Group by year, then Category, then SubCategory (leaf: amount/timing)
// setYearCategorySubcategoryTree() {
//   this.isTreeData = true;
//   this.gridOptions.treeData = true;
//   this.gridOptions.getDataPath = (data: any) =>
//     data.parentPath ? [...data.parentPath, data.name] : [data.name];

//   // Build tree: year > category > subCategory (leaf: amount, timing)
//   const yearTree: any[] = [];
//   const years = new Set<string>();
//   this.originalTreeData.forEach(cat => {
//     cat.children.forEach((sub: any) => {
//       Object.keys(sub.yearData).forEach(year => {
//         years.add(year);
//       });
//     });
//   });

//   years.forEach(year => {
//     const yearNode: any = { name: year, children: [] };
//     this.originalTreeData.forEach(cat => {
//       const catNode: any = { name: cat.name, children: [], parentPath: [year] };
//       cat.children.forEach((sub: any) => {
//         if (sub.yearData[year]) {
//           // Only leaf nodes get amount/timing, no children property!
//           catNode.children.push({
//             name: sub.name,
//             parentPath: [year, cat.name],
//             amount: sub.yearData[year].amount,
//             timing: sub.yearData[year].timing
//           });
//         }
//       });
//       if (catNode.children.length) {
//         yearNode.children.push(catNode);
//       }
//     });
//     if (yearNode.children.length) {
//       yearTree.push(yearNode);
//     }
//   });

//   this.rowData = yearTree;
//   this.columnDefs = [
//     {
//       field: 'name',
//       headerName: 'Year / Category / SubCategory',
//       cellRenderer: 'agGroupCellRenderer',
//     },
//     { field: 'amount', headerName: 'Amount' },
//     { field: 'timing', headerName: 'Timing' },
//   ];
// }
}
