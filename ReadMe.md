1. เคาะบรรทัดการ import ที่มาจาก ng default กับ file ที่ import มาเอง เช่น 
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  
  import { AuthGuardService } from './services/authen/auth-guard.service';
  import { HomepageComponent } from './app-modules/homepage/homepage.component';
   
2. css ที่ใช้ร่วมกันทุกหน้า ให้ใส่ไว้ที่ file style.scss ที่อยู่ layer เดียวกับ app 

3. การสร้าง function ให้ใช้แบบ () => {}; หรือ ให้ลง extension tslynt เเล้วปรับการเขียนตามที่ tslynt recommend
