import { Component } from '@angular/core';
import { ViewService } from './services/view/view.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QueseZen';

  constructor(public viewService: ViewService) {
    if (window) {
      // window.console.log = function () { };
      // window.console.error = function () { };
    }
  }
}
