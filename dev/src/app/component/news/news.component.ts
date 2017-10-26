import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx' ;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[];

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private jsonp: Jsonp) {

   }

  ngOnInit() {
  }

  requestData() {
    // var _this = this ;
    // var url= 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    // this.http.get(url).subscribe(function(res){
    //   var olist = JSON.parse(res['_body']) ;
    //   _this.list = olist['result'];
    // }),function(err){
    //     console.log(err);
    // }
    var _this = this ;
    var url= 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.http.get(url).map(res => res.json()).subscribe(function(res){
      // var olist = JSON.parse(res['_body']) ;
      _this.list = res.result;
      console.log(res);
    }),function(err){
        console.log(err);
    }
  }

  requestPostData() {
    var url= '';
    this.http.post(url,
      JSON.stringify({'username':'calamus','content':'calamus'}),
      {headers:this.headers}).subscribe(function(res){
        console.log(res);
      },function(err){
          console.log(err)
      })
  }

}
