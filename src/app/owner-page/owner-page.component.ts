import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CounterCardComponent } from '../components/counter-card/counter-card.component';

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [CounterCardComponent, CommonModule, NgApexchartsModule],

  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent {
  months: string[];
  cities: string[];
  chart4: any;
  countCard1 = [
    { count: 2208, label: 'Total Sales' },
    { count: 21, label: 'Delivery' },
    { count: 10, label: 'Lift' },
    { count: 15, label: 'Rentals' },
  ];
  countCard2 = [
    { count: 2208, label: 'Average Daily Delivery' },
    { count: 21, label: 'Average Daily Volume' },
    { count: 10, label: 'Average Daily Sales' },
  ];
  countCard3 = [
    { count: 2208, label: 'Total Revenue Value' },
    { count: 21, label: 'Transaction Value' },
    { count: 10, label: 'Total Sales' },
  ];

  initializeCities(): string[] {
    return [
      'Douala',
      'Yaoundé',
      'Garoua',
      'Kousséri',
      'Bamenda',
      'Maroua',
      'Bafoussam',
      'Mokolo',
      'Ngaoundéré',
      'Bertoua',
    ];
  }

  createCharts() {
    this.chart4 = {
      chart: {
        type: 'bar',

        stacked: true,
        height: 500,
      },
      series: [
        {
          name: 'Rental',
          data: [
            {
              x: 'Delivery',
              y: 18,
            },
            {
              x: 'Lift',
              y: 13,
            },
            {
              x: 'Rental',
              y: 8,
            },
          ],
        },
      ],
    };
  }

  constructor() {
    this.cities = this.initializeCities();
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
