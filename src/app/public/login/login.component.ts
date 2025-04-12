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

@Component({
  standalone:true,
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatButtonModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  page: string = 'main';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.page =
      this.router.url.split('/')[this.router.url.split('/').length - 1];
    console.log(this.page);
  }
  navigates(path: string) {
    this.router.navigateByUrl(`private/${path}`);
    this.page = path;
  }
}
