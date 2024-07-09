import { Component } from '@angular/core';
import { CardService } from '../components/card/card.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  cards: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

}
