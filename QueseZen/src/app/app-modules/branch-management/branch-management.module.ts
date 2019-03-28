import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchManagementRoutingModule } from './branch-management-routing.module';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { AppBaseModule } from './../../app-base/app-base.module';

const components = [
  MainComponentComponent
];

@NgModule({
  imports: [
    CommonModule,
    BranchManagementRoutingModule,
    AppBaseModule
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
  ]
})
export class BranchManagementModule { }
