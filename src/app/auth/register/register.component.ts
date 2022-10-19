import { Component, OnInit } from '@angular/core';

type book= {
  name:string,
  id:number
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent implements OnInit {
a:book[]=[{name:"pirates", id:1},{name:"carrabian",id:2},{name:"alexa",id:3}]

toggle: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle = false;
    }, 2000);
  }

   sayhi(){
alert("hello")
  }
}
