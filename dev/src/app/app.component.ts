import {Router, NavigationEnd} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',   // 组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calamus';

  constructor(private router: Router) {

  }

}

