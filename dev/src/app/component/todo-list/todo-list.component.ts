/**
 *@author {{Calamus}} {{calamus0427.github.io}}
 */

import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public list: any[];
  public unfinishedList: any[];
  public finishedList: any[];
  public things: any;

  constructor(private storage: StorageService) {
    this.list = [] ;
    this.things = '' ;
   }

  ngOnInit() {
    var todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.list = todolist;
    }
    this.unfinishedList = [] ;

  }

  addList() {
    var todolist = this.storage.getItem('todolist');
    var obj = {
      'name': this.things ,
      'status': 0,
    };
    if (todolist) {
      todolist.push(obj);
      this.storage.setItem('todolist', todolist);
    }else{
      var arr = [] ;
      arr.push(obj);
      this.storage.setItem('todolist', arr);
    }
    this.list.push(obj);
    this.things = '' ;
  }

  addListByEnter(e) {
    if (this.things) {
      if (e.keyCode === 13 ) {
        var todolist = this.storage.getItem('todolist');
        var obj = {
          'name': this.things ,
          'status': 0,
        };
        if (todolist) {
          this.storage.setItem('todolist', todolist);
          todolist.push(obj);
        }else{
          var arr = [] ;
          arr.push(obj);
          this.storage.setItem('todolist', arr);
        }
        this.list.push(obj);
        this.storage.setItem('todolist', this.list);
        this.things = '' ;
      }
    }
  }

  delThings(key){
    var todolist = this.storage.getItem('todolist');
    this.list.splice(key,1);
    this.storage.setItem('todolist', this.list);
    // 这个只能删除整个项，不能删除字符串里的具体内容
    // this.storage.removeItem('todolist[0]');
  }

  //这个方法有问题
  delAll(flag){
    if(flag === 0){
      // debugger
      var todolist = this.storage.getItem('todolist');
      var len = this.list.length ;
      console.log(this.list,len);
      for(var i = 0 ;i < len  ;i++){
          if(this.list[i].status === 0){
            this.list.splice(i,1);
            i--;   //注意：因为splice删除数组以后会修改数组的坐标值所以必须i--修改坐标才能删除全部数据
            this.storage.setItem('todolist', this.list);
          }
      }
      console.log(this.list);
      // this.storage.setItem('todolist', this.list);
    }else if(flag === 1){
      var todolist = this.storage.getItem('todolist');
      var len = this.list.length ;
      console.log(this.list,len);
      for(var i = 0 ;i < len ;i++){
        if(this.list[i].status === 1){
          this.list.splice(i,1);
          i--;   //注意：因为splice删除数组以后会修改数组的坐标值所以必须i--修改坐标才能删除全部数据
          this.storage.setItem('todolist', this.list);
        }
      }

    }

  }

  clearAll(flag){
    var todolist = this.storage.getItem('todolist');
  //这个删除没有在页面动态刷新，存储在localstorage的值是删除了，但页面没有跟着刷新，所以需要手动重置list
      this.storage.removeItem('todolist');
      this.list = [] ;
  }

  changeStatus(key){
    this.list[key].status = (this.list[key].status === 0?1:0);
    this.storage.setItem('todolist', this.list);
  }

}
