import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedIn:any=false;
  
  user!: Observable<boolean>;
  constructor(public authservice: AuthService, private route: Router) {}

  ngOnInit(): void {
  
    this.authservice.user.subscribe(data=>{
      this.user=data
      })
    
  }
  logout() {
    this.user=this.loggedIn
    localStorage.removeItem('token');
    this.route.navigate(['auth/register'])
  }
}
