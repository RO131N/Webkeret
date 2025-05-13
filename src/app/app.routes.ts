import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

import { PrivateComponent } from './private/private.component';
import { MainComponent } from './private/main/main.component';
import { CarsComponent } from './private/cars/cars.component';
import { CalculatorComponent } from './private/calculator/calculator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' }
    ]
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard],  // 🔒 védelem a teljes "private" részre
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent, title: 'Main' },
      { path: 'cars', component: CarsComponent, title: 'Cars' },
      { path: 'calculator', component: CalculatorComponent, title: 'Calculator' }
    ]
  }
];
