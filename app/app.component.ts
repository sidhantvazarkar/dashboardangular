import { CurrencyService } from './dashboard/currency.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCurrency :string = "INR";
  isSidebarClosed = false;

  constructor(private currencyService : CurrencyService){

  }
  sendCurrency(event:string){
    console.log(event);
    this.currencyService.setCurrency(event);
  }


  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
