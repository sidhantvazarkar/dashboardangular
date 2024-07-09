import { Component } from '@angular/core';
import { NotificationService } from '../components/notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dropdownVisible = false;
  selectedCurrency : string ="INR"

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  constructor(private notificationService: NotificationService) {}

  toggleNotifications() {
    this.notificationService.toggleVisibility();
  }

  sendCurrency(event:string){
    console.log(event);
  }







}
