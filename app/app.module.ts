import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { BaseChartDirective } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CoinchartComponent } from './dashboard/coinchart/coinchart.component';
import { MapComponent } from './dashboard/coinchart/map/map.component';
import { RewardsComponent } from './dashboard/coinchart/rewards/rewards.component';
import { TransactionsComponent } from './dashboard/coinchart/transactions/transactions.component';
import { BalanceComponent } from './dashboard/coinchart/balance/balance.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ButtonComponent } from './components/button/button.component';
import { SupriseComponent } from './components/suprise/suprise.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { ReferComponent } from './components/refer/refer.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { AiTipsComponent } from './dashboard/coinchart/balance/ai-tips/ai-tips.component';

import { RewardsService } from './dashboard/coinchart/rewards/rewards.service';
import { TransactionService } from './dashboard/coinchart/transactions/transaction.service';
import { BalanceService } from './dashboard/coinchart/balance/balance.service';
import { AiTipsService } from './dashboard/coinchart/balance/ai-tips/ai-tips.service';
import { WalletComponent } from './wallet/wallet.component';
import { CardComponent } from './components/card/card.component';
import { LoginformComponent } from './components/forms/loginform/loginform.component';
import { CardformComponent } from './components/forms/cardform/cardform.component';
import { CardService } from './components/card/card.service';
import { BackgroundComponent } from './components/background/background.component';
import { CryptoDataService } from './dashboard/crypto-data.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CurrencyService } from './dashboard/currency.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    CoinchartComponent,
    MapComponent,
    RewardsComponent,
    TransactionsComponent,
    BalanceComponent,
    NotificationComponent,
    ButtonComponent,
    SupriseComponent,
    BitcoinComponent,
    ReferComponent,
    BuyPageComponent,
    AiTipsComponent,
    WalletComponent,
    CardComponent,
    LoginformComponent,
    CardformComponent,
    BackgroundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    BaseChartDirective,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule









  ],
  providers: [
    RewardsService,
    TransactionService,
    BalanceService,
    AiTipsService,
    CurrencyService,
    CardService,
    CryptoDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
