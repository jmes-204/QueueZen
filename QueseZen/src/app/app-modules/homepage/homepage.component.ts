import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/config/interface/app-config';
import { AppService } from 'src/app/services/app/app.service';
import { MenuConfig } from './../../config/class/menu-config';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private activeMenuUrl: string = "";
  constructor(public appService: AppService, public menuConfig: MenuConfig) {
  }

  ngOnInit() {
  }
  routerLinkClick(menu: Menu) {
    this.activeMenuUrl = menu.MENU_URL;
  }
  isShowMenu(menuConfigUrl: string) {
    if (this.activeMenuUrl == menuConfigUrl && this.appService.isPermitted(menuConfigUrl)) {
      return true;
    }
    else {
      return false;
    }
  }
}
