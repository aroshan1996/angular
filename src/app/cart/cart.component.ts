import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import decode from 'jwt-decode'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service:CommonserviceService) { }

  ngOnInit(): void {
    const user:any=decode(localStorage.getItem('token')!)
    this.service.getcart(user.id).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
