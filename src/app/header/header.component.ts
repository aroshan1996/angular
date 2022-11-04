import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedIn: any = false;
  role: any = '';
  token: any = '';

  user!: Observable<boolean>;
  constructor(public authservice: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.authservice.user.subscribe((data) => {
      this.user = data;
      this.role = JSON.parse(localStorage.getItem('role')!);
      this.token = jwt_decode(localStorage.getItem('token')!);
    });

    this.maintain();
  }

  maintain() {
    if (localStorage.getItem('token')) {
      this.authservice.getuser(true);

      setInterval(() => {
        if(this.token?.exp<=Math.floor((new Date).getTime() / 1000)){
          this.logout();
        }
      }, 2000);
    }
  }

  myCart() {
    this.route.navigate(['mycart']);
  }

  logout() {
    this.user = this.loggedIn;
    localStorage.clear();
    this.route.navigate(['auth/login']);
  }
}
