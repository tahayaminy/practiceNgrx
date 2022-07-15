import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly timeOut:number=1663792200;
  readonly timeNow:number=new Date().getTime()/1000;
  public days:number=0;
  constructor() { }

  ngOnInit(): void {
    let diff=this.timeOut-this.timeNow;
    this.days=Math.floor(diff / (60*60*24));
  }

}
