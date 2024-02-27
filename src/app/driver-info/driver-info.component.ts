import { Component } from '@angular/core';
import { CounterCardComponent } from '../components/counter-card/counter-card.component';
import { CommonModule } from '@angular/common';
import Chart from '../../../node_modules/chart.js/auto/auto';

import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-driver-info',
  standalone: true,
  imports: [CounterCardComponent, CommonModule, NgApexchartsModule],
  templateUrl: './driver-info.component.html',
  styleUrl: './driver-info.component.scss',
})
export class DriverInfoComponent {
  months: string[];
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;

  countCard = [
    { count: 23, label: 'Average Delivery Per Trip' },
    { count: 673, label: 'Sum of Trip' },
    { count: 139, label: 'Total Volume Number' },
    { count: 86440, label: 'Sum of Revenue Value' },
    { count: 86440, label: 'Revenue Value YTD' },
  ];

  createCharts() {
    this.chart1 = new Chart('chart1', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Rental', 'Delivery', 'Lift'],
        datasets: [
          {
            label: 'Rental, Delivery and Lift',
            data: ['50', '524', '329'],
          },
        ],
      },
      options: {
        responsive: true,

        aspectRatio: 1,
      },
    });
    this.chart2 = new Chart('chart2', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
        ],
        datasets: [
          {
            label: 'Delivery',
            data: [
              '576',
              '475',
              '404',
              '373',
              '302',
              '236',
              '206',
              '167',
              '92',
              '79',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 1,
      },
    });
    this.chart3 = new Chart('chart3', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
          'Driver 1',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [
              '467',
              '576',
              '572',
              '79',
              '92',
              '574',
              '573',
              '576',
              '73',
              '506',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 1,
      },
    });
    this.chart4 = {
      series: [
        {
          name: 'City 1',
          data: [
            {
              x: 'Delivery 1',
              y: 218,
            },
            {
              x: 'Delivery 2',
              y: 149,
            },
            {
              x: 'Delivery 3',
              y: 184,
            },
            {
              x: 'Delivery 4',
              y: 184,
            },
          ],
        },
        {
          name: 'City 2',
          data: [
            {
              x: 'Delivery 1',
              y: 218,
            },
            {
              x: 'Delivery 2',
              y: 149,
            },
            {
              x: 'Delivery 3',
              y: 184,
            },
          ],
        },
        {
          name: 'City 2',
          data: [
            {
              x: 'Delivery 1',
              y: 218,
            },
            {
              x: 'Delivery 2',
              y: 149,
            },
            {
              x: 'Delivery 3',
              y: 184,
            },
            {
              x: 'Delivery 3',
              y: 84,
            },
          ],
        },
        {
          name: 'City 2',
          data: [
            {
              x: 'Delivery 1',
              y: 318,
            },
            {
              x: 'Delivery 2',
              y: 149,
            },
            {
              x: 'Delivery 3',
              y: 184,
            },
          ],
        },
        {
          name: 'City 2',
          data: [
            {
              x: 'Delivery 1',
              y: 108,
            },
            {
              x: 'Delivery 2',
              y: 49,
            },
            {
              x: 'Delivery 3',
              y: 184,
            },
          ],
        },
      ],
      legend: { show: true },
      chart: {
        height: 350,
        type: 'treemap',
      },
    };
  }

  constructor() {
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
  }

  ngOnInit(): void {
    this.createCharts();
  }
}
