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
    console.log(this.storage);
   }

  ngOnInit() {
    var todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.list = todolist;
    }

  }

  addList() {
    var todolist = this.storage.getItem('todolist');
    var obj = {
      'name': this.things ,
      'status': 0,
    };
    console.log(todolist);
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
        console.log(todolist);
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
    console.log(todolist);
    // 这个只能删除整个项，不能删除字符串里的具体内容
    // this.storage.removeItem('todolist[0]');

  }

  changeStatus(key){
    console.log(this.list[key].status) ;
    this.list[key].status = (this.list[key].status === 0?1:0);
    this.storage.setItem('todolist', this.list);
  }

}
