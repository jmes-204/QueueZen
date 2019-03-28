import { Component, OnInit } from '@angular/core';
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

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fullname = this.appService.user.NAME + ' ' + this.appService.user.SURNAME;
    this.menus = this.appService.appConfig.menus;

    this.menus.forEach((menu, index) => {
      console.log("menu ", index, "is", menu.MENU_NAME);
    });
  }

  logout() {
    this.authService.logout().subscribe(response => {
      if (response.success) {
        window.location.reload();
      }
    });
  }
  routerLink(menu: Menu) {
    this.router.navigate([menu.MENU_URL]);
  }

}
