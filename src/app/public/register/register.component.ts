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
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public registerform = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private auth: Auth, private router: Router) {}

  registration(): void {
    const email = this.registerform.get('email')?.value;
    const password = this.registerform.get('password')?.value;
    const repassword = this.registerform.get('repassword')?.value;

    if (!this.registerform.valid || password !== repassword) {
      alert('Nem megfelelő a form vagy a jelszavak nem egyeznek.');
      return;
    }

    createUserWithEmailAndPassword(this.auth, email!, password!)
      .then(() => {
        const user = {
          name: this.registerform.get('name')?.value,
          birthday: this.registerform.get('date')?.value,
          city: this.registerform.get('city')?.value,
          telNumber: this.registerform.get('phone')?.value,
          email
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/private');
      })
      .catch(err => {
        console.error(err);
        alert('A regisztráció sikertelen! (' + err.code + ')');
      });
  }
}
