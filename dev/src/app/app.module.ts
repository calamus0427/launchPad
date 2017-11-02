import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule} from '@angular/material';

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
import { CanvasBgComponent } from './component/canvas-bg/canvas-bg.component';
import { TalkComponent } from './component/talk/talk.component';
import { ReaderComponent } from './component/reader/reader.component';
import { AccordionBasicComponent } from './component/accordion-basic/accordion-basic.component';





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
    CanvasBgComponent,
    TalkComponent,
    ReaderComponent,
    AccordionBasicComponent,
  ],
  imports: [
    // 当前项目依赖那些模块
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgbModule.forRoot(),
    HttpModule,
    JsonpModule,
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
