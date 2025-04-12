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
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public registerform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    date: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    repassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router) {}

  createUser(): User {
    return {
      name: this.registerform.get('name')!.value,
      email: this.registerform.get('email')!.value,
      birthday: this.registerform.get('date')!.value,
      city: this.registerform.get('city')!.value,
      telNumber: this.registerform.get('phone')!.value,
    } as User;
  }

  checkForm(): boolean {
    return (
      this.registerform.valid &&
      this.registerform.get('password')!.value ===
        this.registerform.get('repassword')!.value
    );
  }

  registration(): void {
    if (this.checkForm()) {
      localStorage.setItem('user', JSON.stringify(this.createUser()));
      this.router.navigateByUrl('private');
    }
  }
}
