import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-private',
  imports: [RouterOutlet,MatSidenavModule,MenuComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})
export class PrivateComponent {
  open:boolean=false;
}
