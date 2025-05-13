import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth'; // 🔑 Firebase Auth
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private auth: Auth) {}

  login(): void {
    const { email, password } = this.loginForm.value;

    if (!email || !password) {
      alert('Kérlek töltsd ki az összes mezőt.');
      return;
    }

    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.router.navigateByUrl('/private'); // ✅ Beléptetés után továbbirányítás
      })
      .catch((error) => {
        alert('Hibás email vagy jelszó!');
        console.error('Bejelentkezési hiba:', error);
      });
  }
}
