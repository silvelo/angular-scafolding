import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './module/main/components/fontawesome/fontawesome.component';

import { LoginComponent } from './module/main/components/login/login.component';
import { MainComponent } from './module/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'fontawesome',
    component: FontawesomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
