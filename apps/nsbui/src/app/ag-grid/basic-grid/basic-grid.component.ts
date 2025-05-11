import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GetDataPath, GridApi } from 'ag-grid-community';


@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class BasicGridComponent    {


  rowClassRules = {
    'ag-grid-row-less': (params:any) => params.data.duration < 5,
    'ag-grid-row-more': (params:any) => params.data.duration > 4
  }
  public columnDefs: ColDef[] = [
    { field: 'fundGroup',flex:2 , checkboxSelection:true}, // Group rows by fundGroup
    { field: 'riskType' }, // Group columns by Risk A, Risk B
    { field: 'duration' }, // Display duration under pivoted columns
    { field: 'beta',  minWidth:150,
      cellClassRules: {
        'ag-grid-cell-negative': (params) => params.value < 0,
        'ag-grid-cell-positive': (params) => params.value > 0,
        'ag-grid-cell-zero': (params) => params.value === 0,
    } // Display beta under pivoted columns
  }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,

  };


  public rowData: any[] = [
    { fundGroup: 'Group A', fundName: 'Fund 1', riskType: 'Risk A', duration: 5, beta: 0.8 },
    { fundGroup: 'Group A', fundName: 'Fund 2', riskType: 'Risk B', duration: 3, beta: 0.6 },
    { fundGroup: 'Group B', fundName: 'Fund 3', riskType: 'Risk A', duration: 7, beta: 2.9 },
    { fundGroup: 'Group B', fundName: 'Fund 4', riskType: 'Risk B', duration: 4, beta: -1.7 },
    { fundGroup: 'Group C', fundName: 'Fund 5', riskType: 'Risk A', duration: 6, beta: 0 },
    { fundGroup: 'Group C', fundName: 'Fund 6', riskType: 'Risk B', duration: 2, beta: 1.5 ,   selected:true},
  ];
}
