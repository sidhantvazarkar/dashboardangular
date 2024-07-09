import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  constructor(private router: Router) {}

  register(form: NgForm) {
    if (form.valid) {
      // Perform registration logic here, e.g., call a registration API
      alert('Registration successful');
      this.router.navigate(['/login']);
    }
  }
}

