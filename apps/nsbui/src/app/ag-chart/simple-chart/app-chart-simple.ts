import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-grid-enterprise';





@Component({
  selector: 'app-chart-simple',
  templateUrl: './app-chart-simple.html',
  styleUrls: ['./app-chart-simple.scss']
})
export class SimpleAgChartComponent  {
  fruits = ['Apples', 'Bananas', 'Oranges'];
  minPrice: number = 0;
maxPrice: number = 0;

fruitColors: { [key: string]: string } = {
  Apples: '#f44336',   // red
  Bananas: '#ffeb3b',  // yellow
  Oranges: '#ff9800'   // orange
};


ngOnInit() {
  const prices = this.allData.map(d => d.price);
  this.minPrice = Math.min(...prices);
  this.maxPrice = Math.max(...prices);
}

  allData = [
    { category: 'Apples', date: '2025-04-01', price: 1.20 },
    { category: 'Apples', date: '2025-04-02', price: 1.25 },
    { category: 'Apples', date: '2025-04-03', price: 1.22 },
    { category: 'Bananas', date: '2025-04-01', price: 0.99 },
    { category: 'Bananas', date: '2025-04-02', price: 1.05 },
    { category: 'Oranges', date: '2025-04-01', price: 1.50 },
    { category: 'Oranges', date: '2025-04-02', price: 1.52 },
    // ... more data per day per fruit
  ];


  getChartOptions(fruit: string): AgChartOptions {
    const data = this.allData
      .filter(d => d.category === fruit)
      .map(d => ({
        ...d,
        date: new Date(d.date)
      }));

    return {
      title: { text: fruit },
      data,
      axes: [
        {
          type: 'time',
          position: 'bottom',
          title: { text: 'Date' },
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'Price ($)' },
          min: this.minPrice,
          max: this.maxPrice,
          nice: false
        }
      ],
      series: [
        {
          type: 'line',
          xKey: 'date',
          yKey: 'price',
          stroke: this.fruitColors[fruit], // consistent color
          marker: {
            fill: this.fruitColors[fruit],
            stroke: this.fruitColors[fruit]
          },
          strokeWidth: 2,
        }
      ],
      legend: {
        enabled: false // hide per-chart legend
      }
    };
  }



}
