import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup
 } from '@angular/forms';

import { MustMatch } from '../../utils/validation';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'],
})
export class ReactiveformsComponent implements OnInit {
  registerForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private auth:AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

 
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    }

    call (){
      this.auth.getUsers().subscribe(data=>console.log(data))

    }

   

  

   

  
}
