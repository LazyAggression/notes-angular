import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'protected-main',
  templateUrl: './protected-main.component.html',
  styleUrls: ['./protected-main.component.sass'],
})
export class ProtectedMainComponent {
  constructor(private router: Router, private authService: AuthService) {}

  get user() {
    return this.authService.user;
  }

  logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }
}
