import { Component, OnInit } from '@angular/core';
import { ColDef, GetDataPath, GridApi } from 'ag-grid-community';





@Component({
  selector: 'app-aggrid-simple',
  templateUrl: './simple-grid.component.html',
  styleUrls: ['./simple-grid.component.scss']
})
export class SimpleAgGridComponent  {
  public columnDefs: ColDef[] = [
    // we're using the auto group column by default!
    { field: 'jobTitle' },
    { field: 'value',editable:true },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public autoGroupColumnDef: ColDef = {
    headerName: 'Organisation Hierarchy',
    minWidth: 300,
    cellRendererParams: {
      suppressCount: false,
      checkbox: true,
    },
  };
  public rowData: any[] | null = this.getRowData();
  public groupDefaultExpanded = -1;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public getDataPath: GetDataPath = (data: any) => {
    return data.orgHierarchy;
  };


  public getRowData(){
    var rowData = [
      {
        orgHierarchy: ['Asset class'],
        jobTitle: 'Asset Class',
        value: '100',
      },
      {
        orgHierarchy: ['Asset class','equity'],
        jobTitle: 'Equity',
        value: '50',
      },
      {
        orgHierarchy: ['Asset class','equity', 'Amzn'],
        jobTitle: 'Insturmentt',
        value: '10',
      },
      {
        orgHierarchy: ['Asset class','equity', 'google'],
        jobTitle: 'Insturmentt',
        value: '40',
      },

      {
        orgHierarchy: ['Asset class','debt'],
        jobTitle: 'Debt',
        value: '50',
      },
      {
        orgHierarchy: ['Asset class','debt', 'bonds'],
        jobTitle: 'Insturmentt',
        value: '40',
      },
      {
        orgHierarchy: ['Asset class','debt', 'FD'],
        jobTitle: 'Insturmentt',
        value: '10',
      }

         ];
    return rowData;
  }

}
