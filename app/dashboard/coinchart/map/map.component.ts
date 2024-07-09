import { CurrencyService } from './../../currency.service';
import { Component , OnInit, ViewChild,Input } from '@angular/core';
import {  ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ActivatedRoute } from '@angular/router';
import { CryptoDataService } from '../../crypto-data.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})


export class MapComponent implements OnInit {
  @Input() coinId!: string;
  coinData: any;
  days: number = 30;
  currency: string = 'INR';
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: '#fff',
        borderColor: '#695CFE',
        pointBackgroundColor: '#695CFE',
        pointBorderColor: '#695CFE',
        pointHoverBackgroundColor: '#695CFE',
        pointHoverBorderColor: '#695CFE',
      }
    ],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

  constructor(private api: CryptoDataService, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCoinData();
    this.getGraphData(this.days);
    this.currencyService.getCurrency().subscribe(val => {
      this.currency = val;
      this.getGraphData(this.days);
      this.getCoinData();
    });
  }

  getCoinData() {
    this.api.getCurrencyById(this.coinId).subscribe(res => {
      if (this.currency === 'USD') {
        res.market_data.current_price.inr = res.market_data.current_price.usd;
        res.market_data.market_cap.inr = res.market_data.market_cap.usd;
      }
      this.coinData = res;
    });
  }

  getGraphData(days: number) {
    this.days = days;
    this.api.getGrpahicalCurrencyData(this.coinId, this.currency, this.days).subscribe(res => {
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);
      this.lineChartData.datasets[0].data = res.prices.map((a: any) => a[1]);
      this.lineChartData.labels = res.prices.map((a: any) => {
        let date = new Date(a[0]);
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
        return this.days === 1 ? time : date.toLocaleDateString();
      });
    });
  }
}
