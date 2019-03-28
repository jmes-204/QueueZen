import { Component, OnInit } from '@angular/core';
import { BmSearchComponent } from './../bm-search/bm-search.component';
import { ViewService } from 'src/app/services/view/view.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  testInput: string = "TEST INPUT";
  constructor(private viewService: ViewService) { }

  ngOnInit() {
  }
  resiveOutputEvent(param: string) {
    this.viewService.alert(param);
  }
}
