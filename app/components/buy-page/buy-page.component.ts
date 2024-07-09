import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent {
  constructor(public dialogRef: MatDialogRef<BuyPageComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
