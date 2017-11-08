import { HomeComponent } from '../pages/home/home.component';
import { CanActivate, CanDeactivate } from '@angular/router';

export class UnsavedGuard implements CanDeactivate<HomeComponent> {
         canDeactivate(component: HomeComponent) {
           return window.confirm("未保存");
         }
       }
