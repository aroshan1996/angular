import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
 

  constructor(private authservice: AuthService, private route: Router) {}

  ngOnInit(): void {}
  get f() {
    return this.loginform.controls;
  }
  onSubmit(form: any) {
    if (this.loginform.invalid) {
      this.submitted = true;
    }
    this.authservice.getToken(form.value).subscribe((response: any) => {
      localStorage.setItem('token', JSON.stringify(response?.token));
      this.authservice.getuser(true)
      this.route.navigate(['dashboard']);
    }),
      (err: any) => {
        return err;
      };
  }

  navigate(){
    this.route.navigate(['auth/forgotpassword'])
  }
}
