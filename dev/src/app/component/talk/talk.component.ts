// import { clearInterval } from 'timers';
import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {
  public msg  ;
  // public index ;
  public content  ;
  public speed = 100 ;
  constructor() {
    this.msg = "那么，我们的故事开始了......";
   }

  ngOnInit() {
    this.show();
  }
  show(){
    var index = 0 ;
    var _this = this ;
    if(this.content === this.msg){

    }else{
      var speed = this.speed ;
        var timer = setInterval(function(){
        index ++ ;
        console.log(_this.speed,index) ;
        _this.content = _this.msg.substring(0,index);
        if(index > _this.msg.length){
          clearInterval(timer);
        }
    },speed);
    }

  }
  speedUp(){
    var index = 0 ;
    var _this = this ;
    if(this.content === this.msg){
      //do nothing
    }else{
      this.speed = 10 ;
    }
    console.log(this.speed);
  }
  nextPage(){

  }

}
