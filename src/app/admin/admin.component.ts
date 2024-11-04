import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '12345') {
      this.router.navigate(['/create-meeting']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
