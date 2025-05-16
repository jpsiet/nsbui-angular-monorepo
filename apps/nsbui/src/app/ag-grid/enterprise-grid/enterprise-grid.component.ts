import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ColDef, GetDataPath, GridApi, GridReadyEvent } from 'ag-grid-community';
import { IOlympicData } from '../IOlympicData';
import { AgGridAngular } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-enterprise';


@Component({
  selector: 'app-enterprise-grid',
  templateUrl: './enterprise-grid.component.html',
  styleUrls: ['./enterprise-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular,HttpClientModule],
})
export class EnterpriseGridComponent    {
  rowData: IOlympicData[] | undefined;
  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }

  public columnDefs: ColDef[] =  [
    { field: "country", rowGroup:true, hide:true },
   // { field: "athlete", rowGroup:true, hide:true },


    { field: "age" },
  { field: "sport",},
  { field: "year" },

  // { field: "silver" },
  // { field: "bronze" },
  // { field: "total" },

  { field: "gold" }]

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
    enableRowGroup: true,

  };
 //[showOpenedGroup]="true" in order to show the opened group

  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
    headerName: "",
     field: "athlete",  // in ca  n be any field does't have to be the same as the one in columnDefs

    cellRendererParams: {
      suppressCount: true,
      checkbox: true,
      // innerRenderer: (params: ICellRendererParams) => {
      //   return "<b> # " + params.value + "</b>";
      // }
    },
  };


}
