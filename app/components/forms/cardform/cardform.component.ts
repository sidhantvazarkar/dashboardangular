import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../card/card.service';


@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrl: './cardform.component.css'
})
export class CardformComponent {
  cardNumber: string = '';
  cardHolder: string = '';
  cardCvv: string = '';
  cardDate: string = '';

  constructor(private cardService: CardService, private router: Router) {}

  onSubmit() {
    const newCard = {
      number: this.cardNumber,
      holder: this.cardHolder,
      cvv: this.cardCvv,
      date: this.cardDate
    };

    this.cardService.addCard(newCard);
    this.router.navigate(['/wallet']);
  }
}

