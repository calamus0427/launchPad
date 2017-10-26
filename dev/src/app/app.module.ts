import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StorageService } from './services/storage.service';

import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HeaderComponent } from './component/header/header.component';
import { ListComponent } from './component/list/list.component';
import { InputComponent } from './component/input/input.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { MusicListComponent } from './component/music-list/music-list.component';
import { NewsComponent } from './component/news/news.component';
import { IconComponent } from './component/icon/icon.component';
import { ButtonComponent } from './component/button/button.component';





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
    InputComponent,
    TodoListComponent,
    MusicListComponent,
    NewsComponent,
    IconComponent,
    ButtonComponent,
  ],
  imports: [
    // 当前项目依赖那些模块
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  // 服务
  providers: [
    StorageService
  ],
   // 要默认启动那个组件
  bootstrap: [AppComponent]
})
export class AppModule { }
