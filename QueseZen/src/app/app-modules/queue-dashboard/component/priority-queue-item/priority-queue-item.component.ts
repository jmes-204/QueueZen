import { Component, OnInit, Input } from '@angular/core';

export interface IFPriorityQueueItem {
  QUEUE_NO: string;
  QUEUE_INDEX: string;
  QUEUE_TIME: string;
}

@Component({
  selector: 'app-priority-queue-item',
  templateUrl: './priority-queue-item.component.html',
  styleUrls: ['./priority-queue-item.component.scss']
})
export class PriorityQueueItemComponent implements OnInit {
  parameter: IFPriorityQueueItem = {
    QUEUE_INDEX: '',
    QUEUE_NO: '',
    QUEUE_TIME: ''
  };
  @Input() initParameter: IFPriorityQueueItem = null;

  constructor() { }

  ngOnInit() {
    if (this.initParameter === null) {
      this.initParameter = {
        QUEUE_INDEX: '',
        QUEUE_NO: '',
        QUEUE_TIME: ''
      };
    }
  }

}
