import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent {
  constructor(public dialogRef: MatDialogRef<ReferComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  getWhatsAppURL() {
    const message = encodeURIComponent('Hey, join our trading platform for real trading experience! 🚀');
    return `https://wa.me/yourwhatsappnumber?text=${message}`;
     // Replace 'yourwhatsappnumber' with your actual WhatsApp number
  }



}

