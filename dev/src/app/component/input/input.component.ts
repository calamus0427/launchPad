import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public search:any;

  constructor() {
    this.search = '' ;
  }

  ngOnInit() {
  }

  enterFn(e) {
    console.log(e);
    if (e.keyCode === 13 || e.key === "Enter") {
      console.log( "回车键按下" );
    }
  }
}
