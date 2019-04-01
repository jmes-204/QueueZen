import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService, ResponseType } from './../app/app.service';

//! MockupData
import { APP_CONFIG } from './../../config/mockup-data/app-config';
import { USER } from './../../config/mockup-data/user';
import { CurrentConfig } from 'src/app/config/interface/local-storage/current-config';
//! MockupData

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private appService: AppService) { }

  isLoggedIn(): Observable<boolean> {
    if (this.appService.appConfig != null) {
      return of(true);
    } else {
      //TODO: Fix for test login
      const currentConfigStr: string = localStorage.getItem('currentConfig');
      const currentConfig: CurrentConfig = JSON.parse(currentConfigStr);

      if (currentConfig) {
        // logged in so return true
        this.appService.user = currentConfig.userInfo;
        this.appService.appConfig = {
          menus: currentConfig.menus,
          general: currentConfig.general
        }
        return of(true);
      }
      else {
        return of(false);
      }

      //TODO: Fix for test login
      // return this.appService.reqApi(`${this.appService.hostName}Handlers/AppInit.ashx`, null, ResponseType.json).pipe(
      //   map(response => {
      //     if (response.is_success && response.userInfo) {
      //       // update global user information
      //       this.appService.user = response.userInfo;

      //       // update global application config
      //       this.appService.appConfig = {
      //         Systems: response.systems,
      //         Functions: response.function,
      //         General: response.general
      //       };
      //     }
      //     return response.is_success && response.userInfo != undefined;
      //   })
      // );
    }
  }

  login(credential: any): Observable<any> {
    //TODO: Fix for test login
    if (credential.USERNAME == "username" && credential.PASSWORD == "1234") {

      const response = {
        is_success: true,
        message: "login complete",
        userInfo: USER,
        menus: APP_CONFIG.menus,
        general: APP_CONFIG.general
      }

      this.appService.user = response.userInfo;
      this.appService.appConfig = {
        menus: response.menus,
        general: response.general
      }



      localStorage.setItem('currentConfig', JSON.stringify(response));
      return of(response)
    }
    //TODO: Fix for test login

    // return this.appService.reqApi(`${this.appService.hostName}/Handlers/AppLogin.ashx`, credential, ResponseType.json).pipe(
    //   map(response => {

    //     const mockResponse = {
    //       is_success: true,
    //       message: "login complete",
    //       userInfo: USER,
    //       menus: APP_CONFIG.menus,
    //       general: APP_CONFIG.general
    //     }

    //     if (response.is_success) {
    //       this.appService.token = response.result.token;
    //       this.appService.user = mockResponse.userInfo;
    //       this.appService.appConfig = {
    //         menus: mockResponse.menus,
    //         general: mockResponse.general
    //       }
    //     }

    //     return mockResponse;
    //   })
    // );
  }
  logout(): Observable<any> {
    //TODO: Fix for test logout
    let response = {
      is_success: true
    }
    if (response.is_success) {
      this.appService.user = null;
      this.appService.appConfig = null;
    }

    localStorage.removeItem('currentConfig');
    return of(response)
    //TODO: Fix for test logout

    // return this.appService.reqApi(`${this.appService.hostName}/Handlers/AppLogout.ashx`, null, ResponseType.json).pipe(
    //   map(response => {
    //     if (response.is_success) {
    //       this.appService.user = null;
    //       this.appService.appConfig = null;
    //     }

    //     return response;
    //   })
    // );
  }
}
