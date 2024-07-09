import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Output() sidebarToggle = new EventEmitter<void>();

  isSidebarClosed = true;

  onToggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.sidebarToggle.emit();
  }
}










