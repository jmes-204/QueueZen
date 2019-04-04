import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
export interface IFTable {
  SERVICE_CHANEL: string;
  QUEUE_NUMBER: string;
}

const mockupElementDate: IFTable[] = [
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'A001' },
  { SERVICE_CHANEL: '2', QUEUE_NUMBER: 'A002' },
  { SERVICE_CHANEL: '3', QUEUE_NUMBER: 'A003' },
  { SERVICE_CHANEL: '4', QUEUE_NUMBER: 'C001' },
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'C002' }
];
@Component({
  selector: 'app-onservice-queue-list',
  templateUrl: './onservice-queue-list.component.html',
  styleUrls: ['./onservice-queue-list.component.scss']
})
export class OnserviceQueueListComponent implements OnInit {
  // public displayedColumns: string[] = ['SERVICE_CHANEL', 'QUEUE_NUMBER'];
  public dataSource: IFTable[];
  priorityQueueItemHeight: number;
  priorityQueueMaxItem = 10;

  constructor() { }

  ngOnInit() {
    this.setOnServiceQueueItemHeight(this.priorityQueueMaxItem);
    this.setOnServiceQueueItem(mockupElementDate, this.priorityQueueMaxItem);
  }
  setOnServiceQueueItemHeight(maxItem: number) {
    this.priorityQueueMaxItem = maxItem;
    this.priorityQueueItemHeight = 100 / (maxItem);
  }
  setOnServiceQueueItem(mockPriorityQueueItem: IFTable[], maxItem: number) {
    this.dataSource = new Array();
    for (let i = 0; i < maxItem; i++) {
      if (mockPriorityQueueItem[i]) {
        this.dataSource.push(mockPriorityQueueItem[i]);
      } else {
        const newData: IFTable = {
          SERVICE_CHANEL: ''
          , QUEUE_NUMBER: ''
        };
        this.dataSource.push(newData);
      }
    }
  }
}
