import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CounterCardComponent } from '../components/counter-card/counter-card.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CounterCardComponent, CommonModule, NgApexchartsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  months: string[];
  chart4: any;
  countCard = [
    { count: 2208, label: 'Total Sales' },
    { count: 350, label: 'Client Credit' },
    { count: 10, label: 'Lift' },
    { count: 15, label: 'Rentals' },
    { count: 21, label: 'Delivery' },
  ];
  createCharts() {
    this.chart4 = {
      chart: {
        type: 'bar',
        stacked: true,
        stackType: '100%',
        height: 500,
      },
      series: [
        {
          name: 'Delivery',
          data: [
            {
              x: 'January',
              y: 9,
            },
            {
              x: 'February',
              y: 18,
            },
            {
              x: 'March',
              y: 13,
            },
          ],
        },
        {
          name: 'Lift',
          data: [
            {
              x: 'January',
              y: 11,
            },
            {
              x: 'February',
              y: 0,
            },
            {
              x: 'March',
              y: 9,
            },
          ],
        },
        {
          name: 'Rental',
          data: [
            {
              x: 'January',
              y: 18,
            },
            {
              x: 'February',
              y: 0,
            },
            {
              x: 'March',
              y: 8,
            },
          ],
        },
      ],
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
