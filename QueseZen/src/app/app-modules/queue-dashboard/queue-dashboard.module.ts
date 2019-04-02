import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * == Component Of Menu == * //
import { QueueDashboardMainComponent } from './component/queue-dashboard-main/queue-dashboard-main.component';
import { OnserviceQueueListComponent } from './component/onservice-queue-list/onservice-queue-list.component';
import { OnserviceQueueItemComponent } from './component/onservice-queue-item/onservice-queue-item.component';
import { NormalQueueListComponent } from './component/normal-queue-list/normal-queue-list.component';
import { NormalQueueItemComponent } from './component/normal-queue-item/normal-queue-item.component';
import { PriorityQueueListComponent } from './component/priority-queue-list/priority-queue-list.component';
import { PriorityQueueItemComponent } from './component/priority-queue-item/priority-queue-item.component';
// * ======================= * //

const components = [
  QueueDashboardMainComponent
  , OnserviceQueueListComponent
  , OnserviceQueueItemComponent
  , NormalQueueListComponent
  , NormalQueueItemComponent
  , PriorityQueueListComponent
  , PriorityQueueItemComponent
];

@NgModule({
  imports: [
    CommonModule
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
  ]
})
export class QueueDashboardModule { }
