import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';
import { AngularMatterialModule } from './../matterials/angular-matterial.module'

import { AppService } from './../services/app/app.service';
import { ViewService } from './../services/view/view.service';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './../app-modules/homepage/homepage.component';
import { SwitcherComponent } from './switcher/switcher.component';

const components = [
  LoginComponent
  , HomepageComponent
  , SwitcherComponent
];
@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , HttpClientModule
    , LoginRoutingModule
    , AngularMatterialModule
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
    AppService
    , ViewService
  ]
})
export class AppBaseModule { }
