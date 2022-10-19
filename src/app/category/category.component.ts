import { Component, OnInit } from '@angular/core';

import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  constructor(private commonservice: CommonserviceService) {}

  ngOnInit(): void {
    this.commonservice.getCategories().subscribe((response:any) => {
      this.categories= response.categories
    });
  }
}
