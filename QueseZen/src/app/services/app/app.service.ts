import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'; //, RequestOptions, Response
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './../../config/interface/user';
import { AppConfig } from './../../config/interface/app-config';
import { ViewService } from './../view/view.service';

@Injectable()
export class AppService {
  user: User = null;
  appConfig: AppConfig = null;

  regEx: RegExp;

  constructor(
    private http: HttpClient
    , private viewService: ViewService
  ) { }

  /**
   * Get application host name.
   *
   * `const host = this.app.hostName;`
   */
  get hostName(): string {
    return document.getElementsByTagName('base')[0].href;
  }

  get filePath(): string {
    return document.getElementsByTagName('base')[0].href.replace('onedpt', 'onedpt-storage');
  }

  /**
   * Request web service with url
   *
   * `const req: Observable<any> = this.appServicce.reqUrl('http://example.com/api/..');`
   *
   * @param url Url for web service
   * @param params (Optional) Parameters with JSON data format
   * @param showLoading (Boolean) showLoading, default: true
   * @param responseType (Optional) Response type, default: ResponseType.text
   */
  reqUrl(url: string, params: any = {}, responseType: ResponseType = ResponseType.text, showLoading: boolean = false): Observable<any> {
    if (showLoading) {
      this.viewService.showLoading();
    }
    return this._reqUrl(url, params, responseType).pipe(
      map((jsonResponse: any) => {
        if (showLoading) {
          this.viewService.hideLoading();
        }
      })
    );
  }

  /**
   * Request stored procedure
   *
   * `const req: Observable<any> = this.appServicce.reqApi('http://example.com/api/..');`
   *
   * @param url Url for web service
   * @param params (Optional) Parameters with JSON data format
   * @param showLoading (Boolean) showLoading, default: true
   * @param responseType (Optional) Response type, default: ResponseType.json
   */
  reqApi(url: string, params: any = {}, responseType: ResponseType = ResponseType.json, showLoading: boolean = false): Observable<any> {
    if (showLoading) {
      this.viewService.showLoading();
    }
    return this._reqUrl(url, params, responseType).pipe(
      map((jsonResponse: any) => {
        const status: string = jsonResponse.success ? ' (success)' : ' (fail)';
        console.log('reqApi: ' + url + status, params, jsonResponse);
        if (showLoading) {
          this.viewService.hideLoading();
        }

        if (jsonResponse.success && jsonResponse.message !== '') {
          this.regEx = new RegExp('^[0-9]+$');
          if (!this.regEx.test(jsonResponse.message)) {
            this.viewService.alert(jsonResponse.message);
          }
        }

        if (!jsonResponse.success) {
          this.viewService.alert('เกิดข้อผิดพลาด');
        }

        if (jsonResponse == null) {
          // this.viewService.hideLoading();
          throw new Error('request return empty response');
        }
        else if (jsonResponse.success == null) {
          // this.viewService.hideLoading();
          throw new Error(`json response does not contain 'success' parameter`);
        }
        else if (jsonResponse.success != true) {
          // this.viewService.hideLoading();
          throw new Error(jsonResponse.message);
        }
        else {
          // this.viewService.hideLoading();
          return jsonResponse;
        }
      })
    );
  }

  isPermitted(menuId: string) {
    const findResult = this.appConfig.menus.find(fn => fn.MENU_ID === menuId);
    if (findResult) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Get cookie value with name reference
   *
   * `const csrf: string = this.app.getCookie('CSRF_TOKEN');`
   *
   * @param name ชื่อของ cookie
   */
  getCookie(name): string {
    let value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length == 2) return parts.pop().split(';').shift();
  }

  /**
   * Soft copy JSON data
   *
   * `let myJson: object = this.app.softCopyJSON({...});`
   *
   * @param data JSON data format
   */
  softCopyJSON(data: any): object {
    let cloned: object = {};
    for (let key in data)
      cloned[key] = data[key];

    return cloned;
  }

  /**
   * Get domain name from url
   *
   * `const domain: string = this.app.getDomainName('http://example.com/path/to/service');`
   *
   * @param url Url
   */
  getDomainName(url: string): string {
    let domainNameStartIndex = url.indexOf('//');
    let domainName = '';

    if (domainNameStartIndex >= 0)
      domainName = url.substring(domainNameStartIndex + 2);
    else
      domainName = url;

    let domainNameEndIndex = domainName.indexOf('/');

    if (domainNameEndIndex >= 0)
      domainName = domainName.substring(0, domainNameEndIndex);

    return domainName;
  }


  private _reqUrl(url: string, params: any, responseType: ResponseType = ResponseType.text): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };

    let paramsToSend = this.softCopyJSON(params);
    let domainName = this.getDomainName(url);
    if (domainName.toLowerCase() == window.location.host.toLowerCase())
      paramsToSend['CSRF_TOKEN'] = this.getCookie('CSRF_TOKEN');

    let response = this.http.post(url, paramsToSend, httpOptions);

    if (responseType == ResponseType.json)
      return response.pipe(map((res: Response) => res.json()));
    else if (responseType == ResponseType.arrayBuffer)
      return response.pipe(map((res: Response) => res.arrayBuffer()));
    else
      return response.pipe(map((res: Response) => res.text()));
  }
}


export enum ResponseType {
  json,
  text,
  arrayBuffer
}
