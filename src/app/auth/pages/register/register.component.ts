import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  myRegisterForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  onSubmit() {
    const { username, password, name, email } = this.myRegisterForm.value;
    this.authService
      .register(username, password, name, email)
      .subscribe((resp) => {
        if (resp) {
          this.router.navigateByUrl('/notes');
        } else {
          Swal.fire('Something bad happened.');
        }
      });
  }
}
