import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() msg: string ;
  @Output() private outer= new EventEmitter<string>();
  public title = '这是一个头部组件';
  // public msg: any;

  constructor() {
    /*构造函数 注意：花括号后面没有逗号 */
   }

  ngOnInit() {
    /*生命周期函数 加载出发的方法 */
    // this.msg = '测试' ;
  }

}
