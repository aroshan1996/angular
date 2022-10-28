import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
submitted=false
registerform = new FormGroup({
fullName:new FormControl('',Validators.required),
email: new FormControl("",[Validators.required,Validators.email]),
userName:new FormControl("",[Validators.required,Validators.pattern('^(?![0-9]+$)[a-zA-Z0-9\w_ ]{2,}$')]),
phone:new FormControl("",[Validators.required,Validators.pattern('[- +()0-9]{10}')]),
role:new FormControl('',Validators.required),
password: new FormControl("",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')])
})
  constructor(private auth : AuthService, private router: Router ) { }

  ngOnInit(): void {
  }
get f() { return this.registerform.controls; }
onSubmit(form:any){
  if(this.registerform.invalid){
    this.submitted=true
  }
console.log(form.value)
this.auth.createUser(form.value).subscribe((response:any)=>{
console.log(response);
this.router.navigate(['auth/login'])
})
}
}
