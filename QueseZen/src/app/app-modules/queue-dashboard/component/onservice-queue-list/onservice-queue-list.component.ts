import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
export interface IFTable {
  SERVICE_CHANEL: string;
  QUEUE_NUMBER: string;
}

const elementDate: IFTable[] = [
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'A001' },
  { SERVICE_CHANEL: '2', QUEUE_NUMBER: 'A002' },
  { SERVICE_CHANEL: '3', QUEUE_NUMBER: 'A003' },
  { SERVICE_CHANEL: '4', QUEUE_NUMBER: 'C001' },
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'C002' },
  { SERVICE_CHANEL: '', QUEUE_NUMBER: '' },
  { SERVICE_CHANEL: '', QUEUE_NUMBER: '' },
  { SERVICE_CHANEL: '', QUEUE_NUMBER: '' },
  { SERVICE_CHANEL: '', QUEUE_NUMBER: '' },
  { SERVICE_CHANEL: '', QUEUE_NUMBER: '' }
];
@Component({
  selector: 'app-onservice-queue-list',
  templateUrl: './onservice-queue-list.component.html',
  styleUrls: ['./onservice-queue-list.component.scss']
})
export class OnserviceQueueListComponent implements OnInit {
  public displayedColumns: string[] = ['SERVICE_CHANEL', 'QUEUE_NUMBER'];
  public dataSource: IFTable[] = elementDate;

  constructor() { }

  ngOnInit() {
  }

}
