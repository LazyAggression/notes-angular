import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}

  get user() {
    return this.authService.user;
  }

  logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }
}