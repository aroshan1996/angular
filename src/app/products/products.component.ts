import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

interface ProductItem {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface Product extends Array<ProductItem> {}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() id: string = '';
  @Input() maxSize: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() pageBoundsCorrection: EventEmitter<number> | undefined;
  category: string = '';
  price: number = 0;
  size: number = 5;
  page: number = 1;
  count: number = 0;
  productlist: Product = [];
  baseurl = environment.imageurl;
  userid: any = decode(localStorage.getItem('token')!);

  constructor(private services: CommonserviceService, private route: Router) {}

  ngOnInit(): void {
    this.services
      .getProducts(this.category, this.price, this.page, this.size)
      .subscribe((response: any) => {
        this.productlist = response.products;
        this.count = response.count;
      });
  }

  pageChanged(event: any) {
    this.page = event;
    this.services
      .getProducts(this.category, this.price, this.page, this.size)
      .subscribe((response: any) => {
        this.productlist = response.products;
        this.count = response.count;
      });
  }

  productdetail(id: any) {
    this.route.navigate(['/product', id]);
  }

  cart(id: any) {
    let data = {
      productid: id,
      userid: this.userid.id,
    };

    this.services.addtoCart(data).subscribe((response: any) => {
      console.log(response);
    });
  }
}
