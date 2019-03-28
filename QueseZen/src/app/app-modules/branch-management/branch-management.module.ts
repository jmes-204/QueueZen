import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchManagementRoutingModule } from './branch-management-routing.module';
import { AppBaseModule } from './../../app-base/app-base.module';

import { MainComponentComponent } from './component/main-component/main-component.component';
import { BmSearchComponent } from './component/bm-search/bm-search.component';
const components = [
  MainComponentComponent
  , BmSearchComponent
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
