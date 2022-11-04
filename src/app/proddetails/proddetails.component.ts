import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

type details = {
  _id: string;
  productName: string;
  description: string;
  price: number;
  subCategory: string;
  thumbnail: string;
  images: string[] ;
  userid: string;
};

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.scss'],
})
export class ProddetailsComponent implements OnInit {
  product: details | undefined;
  shots:string[]=[]

  constructor(
    private activeroute: ActivatedRoute,
    private service: CommonserviceService
  ) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params) => {
      this.service.fetchproduct(params.get('id')).subscribe((response: any) => {
        console.log(response);
        this.product = response;
        this.shots=response.images
        console.log(this.shots)
      });
    });
  }
}
