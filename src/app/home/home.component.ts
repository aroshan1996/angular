import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

interface category {
  _id: string;
  name: string;
}

interface list extends Array<category> {}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: list = [];
  sublist: any = [];
  show: boolean = false;
  toggle: boolean = true;
  data: any;
  products: any[] = [];
  cartitem!: Observable<boolean>;
  id: any = decode(localStorage.getItem('token')!);
  item: any;

  constructor(
    private service: CommonserviceService,
    private route: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
    this.service.getProducts('', 0, 0, 0, '').subscribe((response: any) => {
      this.products = response;
    });

    this.service.cartitem.subscribe((data) => {
      this.cartitem = data;
      if (data) {
        this.service.getcart(this.id?.id).subscribe((response: any) => {
          this.item = response.length;
          console.log(response);
        });
      }
    });
    if(localStorage){
      this.service.getcart(this.id?.id).subscribe((response: any) => {
        this.item = response.length;
      });
    }
    
  }

  subc(id: string, value: string) {
    this.service.getsubCategories(id).subscribe((response: any) => {
      this.show = true;
      this.toggle = true;
      this.categories = response;
      this.route.navigate([], {
        relativeTo: this.activatedroute,
        queryParams: { category: value },
      });
    });
  }

  productlist(id: string) {
    this.toggle = false;
    this.route.navigate([], {
      relativeTo: this.activatedroute,
      queryParams: { filter: id },
      queryParamsHandling: 'merge',
    });
  }
}
