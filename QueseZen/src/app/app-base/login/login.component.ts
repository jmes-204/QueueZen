import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/authen/auth.service';
import { ViewService } from './../../services/view/view.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential: { USERNAME: string, PASSWORD: string } = { USERNAME: 'username', PASSWORD: '1234' };
  // credential: { USERNAME: string, PASSWORD: string } = { USERNAME: '', PASSWORD: '' };

  constructor(
    private authService: AuthService
    , private router: Router
    , private viewService: ViewService) { }

  ngOnInit() {
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
