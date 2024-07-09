import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() text: string;
  @Input() navigateRoute: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    if (this.navigateRoute) {
      this.router.navigate([this.navigateRoute]);
    }
  }
}

