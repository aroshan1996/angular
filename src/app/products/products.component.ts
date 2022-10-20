import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { environment } from 'src/environments/environment';

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
  category: string = '';
  price: number = 0;
  skip: number = 0;
  page: number = 0;
  productlist: Product = [];
  baseurl = environment.imageurl;

  constructor(private services: CommonserviceService) {}

  ngOnInit(): void {
    this.services
      .getProducts(this.category, this.price, this.page, this.skip)
      .subscribe((response: any) => {
        this.productlist = response.products;
      });
  }
}
