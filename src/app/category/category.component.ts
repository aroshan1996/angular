import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonserviceService } from '../commonservice.service';

interface category {
  _id: string;
  name: string;
}

interface list extends Array<category> {}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: list = [];
  active:boolean=true
  
  constructor(
    private commonservice: CommonserviceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {

    
  }

  ngOnInit(): void {
    this.commonservice.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }
  navigation(value: any) {
    this.route.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { category: value },
    });
  }

  
}
