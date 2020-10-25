import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './module/main/components/fontawesome/fontawesome.component';
import { I18nComponent } from './module/main/components/i18n/i18n.component';

import { LoginComponent } from './module/main/components/login/login.component';
import { NgrxComponent } from './module/main/components/ngrx/ngrx.component';
import { TypesComponent } from './module/main/components/types/types.component';
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
  },
  {
    path: 'types',
    component: TypesComponent
  },
  {
    path: 'i18n',
    component: I18nComponent
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
