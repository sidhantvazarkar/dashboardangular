import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CoinchartComponent } from "./dashboard/coinchart/coinchart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReferComponent } from "./components/refer/refer.component";
import { BuyPageComponent } from "./components/buy-page/buy-page.component";
import { SupriseComponent } from "./components/suprise/suprise.component";
import { WalletComponent } from "./wallet/wallet.component";
import { CardformComponent } from "./components/forms/cardform/cardform.component";
import { MapComponent } from "./dashboard/coinchart/map/map.component";

const routes:Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path:'profile', component:LoginComponent},
  { path: 'coinchart/:id', component: CoinchartComponent},
  { path: 'refer', component: ReferComponent},
  { path: 'buy', component: BuyPageComponent},
  { path: 'suprise', component: SupriseComponent},
  { path: 'wallet', component: WalletComponent},
  {path: 'card-form', component: CardformComponent},



  // Add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



