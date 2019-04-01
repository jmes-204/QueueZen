import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/authen/auth.service';
import { AppService, ResponseType } from './../../services/app/app.service';
import { Menu } from './../../config/interface/app-config';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  menus: Menu[];
  fullname = '';
  @Output() routerLink = new EventEmitter();

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fullname = this.appService.user.NAME + ' ' + this.appService.user.SURNAME;
    this.menus = this.appService.appConfig.menus;
  }

  logout() {
    this.authService.logout().subscribe(response => {
      if (response.is_success) {
        window.location.reload();
      }
    });
  }
  routerLinkClick(menu: Menu) {
    console.log("Menu", menu);
    // this.router.navigate([menu.MENU_URL]);
    this.routerLink.emit(menu);
  }

}
