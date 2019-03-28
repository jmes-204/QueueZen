import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './../../services/authen/auth-guard.service';
import { MainComponentComponent } from './component/main-component/main-component.component';
const routes: Routes = [
  {
    path: 'entity-configurations'
    , component: MainComponentComponent
    , canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityConfigurationsRoutingModule { }
