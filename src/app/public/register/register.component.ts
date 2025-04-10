import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,MatButtonModule,MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public registerform = new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    date:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    repassword: new FormControl("",[Validators.required,Validators.minLength(6)])

  })
}
