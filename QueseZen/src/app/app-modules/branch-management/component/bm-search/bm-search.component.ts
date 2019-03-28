import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bm-search',
  templateUrl: './bm-search.component.html',
  styleUrls: ['./bm-search.component.scss']
})
export class BmSearchComponent implements OnInit {

  @Input() testInput: string;
  @Output() testOutputClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  btnTestOutputClick(param) {
    this.testOutputClick.next(param);
  }

}
