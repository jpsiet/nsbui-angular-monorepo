
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { originalRowData, transposeRowData } from './grid-config';
import { AgGridAngular } from 'ag-grid-angular';





@Component({
  selector: 'app-mark-tranpose-grid',
  imports  :[AgGridAngular],
  templateUrl: './mark-transpose-grid.component.html'
})
export class MarkTranposeGridComponent  {


  isTransposed = false;
  columnDefs: any[] = [];
  rowData: any[] = [];

autoGroupColumnDef = {
  minWidth: 200,
  cellRendererParams: {
    suppressCount: true
  }
}

  originalRowData = [
    {
      stream: 'Science',
      subject: 'Math',
      'Male-Korean': 85,
      'Male-Asian': 78,
      'Female-Korean': 90,
      'Female-Asian': 88
    },
    {
      stream: 'Science',
      subject: 'Physics',
      'Male-Korean': 80,
      'Male-Asian': 82,
      'Female-Korean': 84,
      'Female-Asian': 86
    },
    {
      stream: 'Commerce',
      subject: 'Accounts',
      'Male-Korean': 75,
      'Female-Asian': 92
    }
  ];

  ngOnInit() {
    this.setGridState();
  }

  toggleTranspose() {
    this.isTransposed = !this.isTransposed;
    this.setGridState();
  }

  setGridState() {
    this.columnDefs = this.generateColumnDefs();
    this.rowData = this.isTransposed
      ? this.transposeRowData(this.originalRowData)
      : this.originalRowData;
  }

  generateColumnDefs() {
    if (!this.isTransposed) {
      return [
        { field: 'stream', rowGroup: true, hide: true },
        { field: 'subject', rowGroup: true, hide: true },
        {
          headerName: 'Male',
          children: [
            { field: 'Male-Korean', headerName: 'Korean' },
            { field: 'Male-Asian', headerName: 'Asian' }
          ]
        },
        {
          headerName: 'Female',
          children: [
            { field: 'Female-Korean', headerName: 'Korean' },
            { field: 'Female-Asian', headerName: 'Asian' }
          ]
        }
      ];
    } else {
      // Group columns under stream → subject
      const streamMap: { [stream: string]: string[] } = {};

      this.originalRowData.forEach(row => {
        if (!streamMap[row.stream]) {
          streamMap[row.stream] = [];
        }
        if (!streamMap[row.stream].includes(row.subject)) {
          streamMap[row.stream].push(row.subject);
        }
      });

      const groupedCols = Object.keys(streamMap).map(stream => ({
        headerName: stream,
        children: streamMap[stream].map(subject => ({
          field: `${stream}-${subject}`,
          headerName: subject
        }))
      }));

      return [
        { field: 'gender', rowGroup: true, hide: true },
        { field: 'nationality', rowGroup: true, hide: true },
        ...groupedCols
      ];
    }
  }

  transposeRowData(data: any[]) {
    const genders = ['Male', 'Female'];
    const nationalities = ['Korean', 'Asian'];
    const transposed: any[] = [];

    genders.forEach(gender => {
      nationalities.forEach(nationality => {
        const row: any = {
          gender,
          nationality
        };

        data.forEach(entry => {
          const fieldKey = `${entry.stream}-${entry.subject}`;
          const valueKey = `${gender}-${nationality}`;
          row[fieldKey] = entry[valueKey] ?? null;
        });

        transposed.push(row);
      });
    });

    return transposed;
  }
}
