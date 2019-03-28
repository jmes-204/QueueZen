import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/authen/auth.service';
import { ViewService } from './../../services/view/view.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  credential: { USERNAME: string, PASSWORD: string } = { USERNAME: 'username', PASSWORD: '1234' };
  // credential: { USERNAME: string, PASSWORD: string } = { USERNAME: '', PASSWORD: '' };

  toggleLoginControl: number = 0;
  btnToggleLoginLabel: string = "Toggle To Login Control 1";
  constructor(
    private authService: AuthService
    , private router: Router
    , private viewService: ViewService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({
      USERNAME: new FormControl('', {
        validators: Validators.required
      }),
      PASSWORD: new FormControl('', {})
    });

    this.formGroup.controls["PASSWORD"].setValidators(Validators.required);

  }
  btnToggleLoginClick() {
    this.toggleLoginControl = (this.toggleLoginControl == 1) ? 0 : 1;
    this.btnToggleLoginLabel = "Toggle To Login Control " + this.toggleLoginControl;
  }
  btnLoginClick() {
    debugger;
    if (this.formGroup.valid) {
      const credential = this.formGroup.value;

      this.authService.login(credential).subscribe(response => {
        if (response.success) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

          // Redirect the user
          this.router.navigate([redirect]);
        } else {
          if (response.message === 'INVALID_USERNAME_OR_PASSWORD') {
            this.viewService.alert('กรุณาตรวจสอบชื่อผู้ใช้งาน และ รหัสผ่านอีกครั้ง');
          }
        }
      });
    }
  }

  login() {
    this.authService.login(this.credential).subscribe(response => {
      if (response.success) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

        // Redirect the user
        this.router.navigate([redirect]);
      } else {
        if (response.message === 'INVALID_USERNAME_OR_PASSWORD') {
          this.viewService.alert('กรุณาตรวจสอบชื่อผู้ใช้งาน และ รหัสผ่านอีกครั้ง');
        }
      }
    });
  }

}
