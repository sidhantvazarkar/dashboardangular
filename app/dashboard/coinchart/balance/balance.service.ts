import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private jsonUrl = 'assets/data/coins.json';

  constructor(private http: HttpClient) {}

  getCoins(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
