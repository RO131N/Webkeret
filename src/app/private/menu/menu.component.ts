import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Output() sidenav = new EventEmitter<boolean>();
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
