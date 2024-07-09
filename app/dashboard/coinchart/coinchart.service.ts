import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from './coin.chart.model';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {
  private dataUrl = 'assets/coin.json';

  constructor(private http: HttpClient) {}

  getCoinData(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.dataUrl);  // Use the Coin[] type
  }
}
