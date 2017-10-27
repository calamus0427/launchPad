import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-bg',
  templateUrl: './canvas-bg.component.html',
  styleUrls: ['./canvas-bg.component.css']
})
export class CanvasBgComponent implements OnInit {
  public canvas;

  public ctx: any;

  constructor() {
    // this.canvas = document.getElementById('canvas');
    // this.ctx = this.canvas.getContext('2d');
  }

  ngOnInit() {
    console.log(this.canvas);
    // this.ctx.fillStyle= '#FF0000';
    // this.ctx.fillRect(0,0,80,100);
  }

}
