import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GetDataPath, GridApi } from 'ag-grid-community';
import { IOlympicData } from './interface';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';





@Component({
  selector: 'app-aggrid-responsive',
  templateUrl: './responsive-grid.component.html',
  styleUrls: ['./responsive-grid.component.scss']
})
export class ResponsiveAgGridComponent  {


    @ViewChild('agGrid') agGrid!: AgGridAngular<IOlympicData>;

    public style: any = {
        width: '100%',
        height: '100%',
        flex: '1 1 auto',
        
    };

    public columnDefs: ColDef[] = [
        { field: 'athlete', width: 150 },
        { field: 'age', width: 90 },
        { field: 'country', width: 150 },
        { field: 'year', width: 90 },
        { field: 'date', width: 150 },
        { field: 'sport', width: 150 },
        { field: 'gold', width: 100 },
        { field: 'silver', width: 100 },
        { field: 'bronze', width: 100 },
        { field: 'total', width: 100 },
    ];
    public rowData!: IOlympicData[];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http
            .get<IOlympicData[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .subscribe((data) => {
                this.rowData = data;
            });
    }

    fillLarge() {
        this.setWidthAndHeight('100%', '100%');
    }

    fillMedium() {
        this.setWidthAndHeight('60%', '60%');
    }

    fillExact() {
        this.setWidthAndHeight('400px', '400px');
    }

    setWidthAndHeight(width: string, height: string) {
        this.style = {
            width: width,
            height: height,
        };
    }
}