import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get name() {
    return this.registerForm.get('name')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.registerForm.valid) {
      this.loading = true;
      this.authService.register(this.registerForm.value).subscribe({
        next: user => {
          this.loading = false;
          this.registerForm.reset();

          Swal.fire({
            icon: 'success',
            title: `Реєстрація пройшла успішно!`,
            text: `Ласкаво просимо, ${user.name}`,
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
