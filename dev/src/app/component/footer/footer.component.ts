import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private footerId: number;

  public msg:string="我是你爸爸";

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.footerId = this.routeInfo.snapshot.queryParams["id"];
    this.footerId = this.routeInfo.snapshot.params["id"];

  }

}
