import { Injectable } from '@angular/core';
import { Transaction } from './transactions.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  private apiUrl = 'assets/transaction..json';  // Path to your JSON file

  constructor(private http: HttpClient) { }

  getTransactions(filter: 'week' | 'month' | 'all'): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl).pipe(
      map(transactions => {
        if (filter === 'week') {
          return transactions.slice(0, 2);  // Show first 2 transactions for "week"
        } else if (filter === 'month') {
          return transactions.slice(1, 6);  // Show transactions 2 through 6 for "month"
        } else {
          return transactions;  // Show all transactions for "all"
        }
      })
    );
  }
}
