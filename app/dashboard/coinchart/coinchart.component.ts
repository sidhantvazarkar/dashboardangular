import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from '../currency.service';
import { CryptoDataService } from '../crypto-data.service';

@Component({
  selector: 'app-coinchart',
  templateUrl: './coinchart.component.html',
  styleUrl: './coinchart.component.css'
})
export class CoinchartComponent implements OnInit {
  coinId!: string;
  coinData: any;
  currency: string = "INR";

  constructor(private route: ActivatedRoute ,private api: CryptoDataService, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.coinId = params['id'];
      this.fetchCoinData();
    });

    this.currencyService.getCurrency().subscribe(val => {
      this.currency = val;
      this.fetchCoinData();
    });
  }

  fetchCoinData() {
    if (this.coinId) {
      this.api.getCurrencyById(this.coinId).subscribe(res => {
        this.coinData = res;
      });
    }
  }
}
