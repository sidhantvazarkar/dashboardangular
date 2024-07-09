import { ActivatedRoute } from '@angular/router';
import { Component ,OnInit,Input } from '@angular/core';
import { BalanceService } from './balance.service';
import { CryptoDataService } from '../../crypto-data.service';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})


export class BalanceComponent implements OnInit {
  @Input() coinId!: string;
  coinData: any;
  currency: string = "INR";

  constructor(private api: CryptoDataService, private activatedRoute: ActivatedRoute, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.coinId = val['id'];
    });
    this.getCoinData();

    this.currencyService.getCurrency().subscribe(val => {
      this.currency = val;
      this.getCoinData();
    });
  }

  getCoinData() {
    this.api.getCurrencyById(this.coinId).subscribe(res => {
      this.coinData = res;
      if (this.currency === "USD") {
        res.market_data.current_price.inr = res.market_data.current_price.usd;
        res.market_data.market_cap.inr = res.market_data.market_cap.usd;
      }
      this.coinData = res;
    });
  }
}
