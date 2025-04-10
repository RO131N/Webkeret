import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-content',
  imports: [MatButtonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  public page:string="login"
  constructor(private actRoute:Router){}
  ngOnInit(): void {
    this.page=this.actRoute.url.split("/")[this.actRoute.url.split("/").length-1]
    console.log(this.page)
  }
  navigate(){
    this.actRoute.navigateByUrl(`public/${this.page}`)
  }
  switchpage(){
    this.page=this.page==="login"?"register":"login"
    this.navigate()
  }
}
