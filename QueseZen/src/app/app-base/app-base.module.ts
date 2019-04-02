import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';
import { AngularMatterialModule } from './../matterials/angular-matterial.module'

import { AppService } from './../services/app/app.service';
import { ViewService } from './../services/view/view.service';
import { GlobalFunctionService } from './../services/global-function/global-function.service';
import { MenuConfig } from './../config/class/menu-config';


import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './../app-modules/homepage/homepage.component';
import { SwitcherComponent } from './switcher/switcher.component';

// * == Menu Module == * //
import { EntityConfigurationsModule } from './../app-modules/entity-configurations/entity-configurations.module';
import { BranchManagementModule } from './../app-modules/branch-management/branch-management.module';
import { QueueDashboardModule } from './../app-modules/queue-dashboard/queue-dashboard.module';
// * ================ * //

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
    /* == Menu Module == */
    , EntityConfigurationsModule
    , BranchManagementModule
    , QueueDashboardModule
    /* ================ */
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
    AppService
    , ViewService
    , GlobalFunctionService
    , MenuConfig
  ]
})
export class AppBaseModule { }
