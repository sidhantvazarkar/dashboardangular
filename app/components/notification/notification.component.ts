import { Component , OnInit  } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {

  isVisible = false;
  notifications = [
    {
      icon: 'assets/icons/etherium.png', // Replace with actual path
      title: 'Etherium Has a Surprise for you',
      time: '1 hour ago'
    },
    {
      icon: 'assets/icons/bitcoin.png', // Replace with actual path
      title: 'Bitcoin Has Dropped!!!',
      time: '2 hours ago'
    },
    // Add more notifications as needed
  ];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  closePanel() {
    this.isVisible = false;
  }

}


