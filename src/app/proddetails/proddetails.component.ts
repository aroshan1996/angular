import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.scss'],
})
export class ProddetailsComponent implements OnInit {
  constructor(private activeroute: ActivatedRoute, private service:CommonserviceService) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params) => {
      this.service.fetchproduct(params.get('id')).subscribe((response:any)=>{
        console.log(response)
      })
     
    });
  }
}
