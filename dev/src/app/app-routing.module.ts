import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgModule } from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router' ;
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { Code404Component } from './component/code404/code404.component';
import { MaterialComponent } from './pages/material/material.component';
import { ProductComponent } from './pages/product/product.component';
import { QuestionComponent } from './pages/question/question.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { VideoComponent } from './pages/video/video.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'todolist',
      component: TodoListComponent
    }],
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  },
    {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard]
})
export class AppRoutingModule {

}
