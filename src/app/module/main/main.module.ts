import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FontawesomeComponent } from './components/fontawesome/fontawesome.component';



@NgModule({
  declarations: [MainComponent, LoginComponent, FontawesomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [MainComponent, LoginComponent, FontawesomeComponent]
})
export class MainModule { }
