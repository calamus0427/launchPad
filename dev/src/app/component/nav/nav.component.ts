import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public navList:any[] ;
  public flag=true;

  constructor() {
    this.navList = ["工程","资源","视频","素材","教程","F&Q","个人中心"] ;
   }

  ngOnInit() {
  }

  showList(msg,key) {
    console.log(key,this.navList[key]) ;
    this.navList[key] = "改变了" ;
    alert(msg) ;
  }

}
