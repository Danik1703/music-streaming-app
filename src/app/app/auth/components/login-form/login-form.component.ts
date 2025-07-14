import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }


  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: user => {
        this.router.navigate(['/home/recommendations']);
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }



  onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: user => {
          this.loading = false;
          this.loginForm.reset();

          Swal.fire({
            icon: 'success',
            title: `Ласкаво просимо, ${user.email}!`,
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/home/recommendations']);
          });
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err.message || 'Сталася помилка';
        }
      });
    }
  }
}
