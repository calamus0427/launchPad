import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HeaderComponent } from './component/header/header.component';
import { ListComponent } from './component/list/list.component';



const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    // 当前项目依赖那些模块
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  // 服务
  providers: [],
   // 要默认启动那个组件
  bootstrap: [AppComponent]
})
export class AppModule { }
