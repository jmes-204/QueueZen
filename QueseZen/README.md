# QueseZen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Team Convention

1. เคาะบรรทัดการ import ที่มาจาก ng default กับ file ที่ import มาเอง เช่น 
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { AuthGuardService } from './services/authen/auth-guard.service';
    import { HomepageComponent } from './app-modules/homepage/homepage.component';
   
2. css ที่ใช้ร่วมกันทุกหน้า ให้ใส่ไว้ที่ file style.scss ที่อยู่ layer เดียวกับ app 

3. การสร้าง function ให้ใช้แบบ () => {}; หรือ ให้ลง extension tslynt เเล้วปรับการเขียนตามที่ tslynt recommend
