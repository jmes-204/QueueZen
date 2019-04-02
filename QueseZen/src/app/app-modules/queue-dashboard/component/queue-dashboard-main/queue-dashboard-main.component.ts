import { Component, OnInit } from '@angular/core';
import { GlobalFunctionService } from './../../../../services/global-function/global-function.service'
@Component({
  selector: 'app-queue-dashboard-main',
  templateUrl: './queue-dashboard-main.component.html',
  styleUrls: ['./queue-dashboard-main.component.scss']
})
export class QueueDashboardMainComponent implements OnInit {

  constructor(public globalFunction: GlobalFunctionService) { }
  public queueDate = '';
  public now: any;

  ngOnInit() {
    this.setDateNowString();
  }
  setDateNowString() {
    setInterval(() => {
      this.now = Date.now();
      this.queueDate = this.globalFunction.getDateLabel(this.now);
    }, 1);
  }

}
