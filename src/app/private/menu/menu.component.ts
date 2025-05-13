import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Output() sidenav = new EventEmitter<boolean>();
  @Output() menuChange = new EventEmitter<string>();

  page: string = 'main';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.page = this.router.url.split('/').pop() || 'main';
    console.log(this.page);
  }

  navigates(path: string) {
    if (path === 'login') {
      this.router.navigateByUrl('/public/login');
    } else {
      this.router.navigateByUrl(`/private/${path}`);
    }
    this.page = path;
    this.menuChange.emit(path);
  }
}
