import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-student-summary-grid',
  templateUrl: './stdent-summary-grid.component.html',
  styleUrls: ['./stdent-summary-grid.component.scss'],
  standalone: true,
  imports: [AgGridAngular],
})
export class StudentSummaryGridComponent {
  public columnDefs: (ColDef | ColGroupDef)[] = [
    { field: 'category', rowGroup: true, hide: true }, // Group rows by category
    {
      headerName: '2023', // Parent column for the year 2023
      children: [
        { field: 'amount', headerName: 'Amount', valueGetter: (params) => params.data?.yearData['2023']?.amount },
        { field: 'timing', headerName: 'Timing', valueGetter: (params) => params.data?.yearData['2023']?.timing },
      ],
    },
    {
      headerName: '2024', // Parent column for the year 2024
      children: [
        { field: 'amount', headerName: 'Amount', valueGetter: (params) => params.data?.yearData['2024']?.amount },
        { field: 'timing', headerName: 'Timing', valueGetter: (params) => params.data?.yearData['2024']?.timing },
      ],
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  public autoGroupColumnDef: ColDef = {
    headerName: 'Category / Sub-Category',
    minWidth: 300,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      suppressCount: true, // Do not show count in group headers
      innerRenderer: (params: any) => {
        // Display subCategory as a leaf item under category
        return params.node.group ? params.value : params.data?.subCategory;
      },
    },
  };

  public rowData: any[] = [
    {
      category: 'Entertainment',
      subCategory: 'Movies',
      yearData: {
        '2023': { amount: 120, timing: '2 hours' },
        '2024': { amount: 150, timing: '2.5 hours' },
      },
    },
    {
      category: 'Entertainment',
      subCategory: 'Concerts',
      yearData: {
        '2023': { amount: 200, timing: '3 hours' },
        '2024': { amount: 250, timing: '3.5 hours' },
      },
    },
    {
      category: 'Food',
      subCategory: 'Groceries',
      yearData: {
        '2023': { amount: 300, timing: 'Weekly' },
        '2024': { amount: 350, timing: 'Weekly' },
      },
    },
    {
      category: 'Food',
      subCategory: 'Dining Out',
      yearData: {
        '2023': { amount: 180, timing: 'Monthly' },
        '2024': { amount: 220, timing: 'Monthly' },
      },
    },
  ];
}
