import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-summary-grid',
  templateUrl: './summary-grid.component.html',
  styleUrls: ['./summary-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class SummaryGridComponent {
  public columnDefs: ColDef[] = [
    { field: 'fundGroup', rowGroup: true, hide: true }, // Group rows by fundGroup
    { field: 'duration' }, // Display duration as a column
    { field: 'beta' }, // Display beta as a column
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  public autoGroupColumnDef: ColDef = {
    headerName: '',
    minWidth: 300,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      suppressCount: true, // Do not show count in group headers
      innerRenderer: (params: any) => {
        // Display fundName for leaf nodes only in the group column
        return params.node.group ? params.value : params.data?.fundName;
      },
    },
  };

  public rowData: any[] = [
    { fundGroup: 'Group A', fundName: 'Fund 1', duration: 5, beta: 0.8 },
    { fundGroup: 'Group A', fundName: 'Fund 2', duration: 3, beta: 0.6 },
    { fundGroup: 'Group B', fundName: 'Fund 3', duration: 7, beta: 2.9 },
    { fundGroup: 'Group B', fundName: 'Fund 4', duration: 4, beta: -1.7 },
    { fundGroup: 'Group C', fundName: 'Fund 5', duration: 6, beta: 0 },
    { fundGroup: 'Group C', fundName: 'Fund 6', duration: 2, beta: 1.5 },
  ];
}
