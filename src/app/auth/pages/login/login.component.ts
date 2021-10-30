import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  myLoginForm: FormGroup = this.fb.group({
    username: ['tom.cruise', [Validators.required]],
    password: ['qwerty12345', [Validators.required]],
  });

  onSubmit() {
    const { username, password } = this.myLoginForm.value;
    this.authService.login(username, password).subscribe((resp) => {
      if (resp) {
        this.router.navigateByUrl('/notes');
      } else {
        Swal.fire('Your credentials are incorrect.');
      }
    });
  }
}
