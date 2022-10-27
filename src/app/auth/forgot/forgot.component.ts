import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgot = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor() {}

  ngOnInit(): void {}

  get f() {
    return this.forgot.controls;
  }

  onSubmit (form:any){
    console.log(form.value)

  }
}
