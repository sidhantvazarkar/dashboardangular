import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: any[] = [];

  addCard(card: any) {
    this.cards.push(card);
  }

  getCards() {
    return this.cards;
  }
}
