import { Component, OnInit } from '@angular/core';
import { Transaction } from './transactions.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  filteredTransactions: Transaction[] = [];
  filter: 'week' | 'month' | 'all' = 'all';

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.updateFilteredTransactions();
  }

  updateFilteredTransactions() {
    this.transactionService.getTransactions(this.filter).subscribe(transactions => {
      this.filteredTransactions = transactions;
    });
  }
}
