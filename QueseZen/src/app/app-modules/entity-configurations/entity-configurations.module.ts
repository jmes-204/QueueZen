import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityConfigurationsRoutingModule } from './entity-configurations-routing.module';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { AppBaseModule } from './../../app-base/app-base.module';

const components = [
  MainComponentComponent
];
@NgModule({
  imports: [
    CommonModule,
    EntityConfigurationsRoutingModule,
    AppBaseModule
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
  ]
})
export class EntityConfigurationsModule { }
