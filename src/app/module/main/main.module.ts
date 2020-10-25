import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FontawesomeComponent } from './components/fontawesome/fontawesome.component';
import { TypesComponent } from './components/types/types.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { I18nComponent } from './components/i18n/i18n.component';



@NgModule({
  declarations: [MainComponent, LoginComponent, FontawesomeComponent, TypesComponent, NgrxComponent, I18nComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [MainComponent, LoginComponent, FontawesomeComponent, TypesComponent, NgrxComponent, I18nComponent]
})
export class MainModule { }
