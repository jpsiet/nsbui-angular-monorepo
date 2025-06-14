
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';



@Component({
  selector: 'app-measure-grid',
  templateUrl: './measure-grid.component.html'
})
export class MeasureGridComponent  {

  columnDefs: any[] = [];
  rowData: any[] = [];
  isTransposed = false;

  originalData: {
    portfolioGroup: string;
    portfolioId: string;
    active_Barra: number;
    active_Duration: number;
    active_VaR: number;
    total_Barra: number;
    total_Duration: number;
    total_VaR: number;
    [key: string]: string | number; // <-- Add index signature
  }[] = [
    {
      portfolioGroup: 'Equities',
      portfolioId: 'EQ-1001',
      active_Barra: 1.2,
      active_Duration: 2.5,
      active_VaR: 3.1,
      total_Barra: 2.1,
      total_Duration: 4.0,
      total_VaR: 5.0
    },
    {
      portfolioGroup: 'Equities',
      portfolioId: 'EQ-1002',
      active_Barra: 1.0,
      active_Duration: 2.1,
      active_VaR: 3.3,
      total_Barra: 2.4,
      total_Duration: 4.3,
      total_VaR: 5.2
    },
    {
      portfolioGroup: 'Fixed Income',
      portfolioId: 'FI-2001',
      active_Barra: 0.8,
      active_Duration: 3.0,
      active_VaR: 2.9,
      total_Barra: 1.5,
      total_Duration: 4.2,
      total_VaR: 4.8
    }
  ];

  ngOnInit() {
    this.setNormalView();
  }

  setNormalView() {
    this.isTransposed = false;
    this.rowData = this.originalData;
    this.columnDefs = this.generateNormalColumnDefs();
  }

  setTransposedView() {
    this.isTransposed = true;
    this.rowData = this.transposeRowData();
    this.columnDefs = this.generateTransposedColumnDefs();
  }

  generateNormalColumnDefs() {
    const allFields = Object.keys(this.originalData[0]);
    const fieldGroups: { [key: string]: string[] } = {};

    allFields.forEach(field => {
      if (['portfolioGroup', 'portfolioId'].includes(field)) return;

      const match = field.match(/^(.*?)_(.+)$/);
      if (match) {
        const [_, weightType, measure] = match;
        if (!fieldGroups[weightType]) {
          fieldGroups[weightType] = [];
        }
        fieldGroups[weightType].push(measure);
      }
    });

    const dynamicCols = Object.entries(fieldGroups).map(([weightType, measures]) => ({
      headerName: this.capitalize(weightType),
      children: measures.map(measure => ({
        field: `${weightType}_${measure}`,
        headerName: this.capitalize(measure)
      }))
    }));

    return dynamicCols;
  }

  generateTransposedColumnDefs() {
    const groupMap: { [key: string]: any[] } = {};

    this.originalData.forEach(portfolio => {
      const group = portfolio.portfolioGroup;
      const id = portfolio.portfolioId;

      if (!groupMap[group]) groupMap[group] = [];

      groupMap[group].push({
        field: `${group}_${id}`,
        headerName: id
      });
    });

    const columnGroups = Object.entries(groupMap).map(([groupName, children]) => ({
      headerName: groupName,
      children
    }));

    return [
      ...columnGroups
    ];
  }

  transposeRowData() {
    const transposed: any[] = [];
    const fields = Object.keys(this.originalData[0]).filter(
      k => !['portfolioGroup', 'portfolioId'].includes(k)
    );

    const metrics = fields.map(field => {
      const [type, measure] = field.split('_');
      return { type, measure, field };
    });

    const groups = Array.from(new Set(metrics.map(m => m.type)));

    groups.forEach(type => {
      const groupMetrics = metrics.filter(m => m.type === type);

      groupMetrics.forEach(metric => {
        const row: any = {
          metricGroup: this.capitalize(type),
          metric: this.capitalize(metric.measure)
        };

        this.originalData.forEach(portfolio => {
          const key = `${portfolio.portfolioGroup}_${portfolio.portfolioId}`;
          row[key] = portfolio[metric.field];
        });

        transposed.push(row);
      });
    });

    return transposed;
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // For normal view
  getDataPath = (data: any) => [data.portfolioGroup, data.portfolioId];

  // For transpose view (row grouping by metricGroup > metric)
  getTransposedDataPath = (data: any) => [data.metricGroup, data.metric];
}
