import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.css']
})
export class ProductListItemsComponent implements OnInit {
  @Input() items:Product
  constructor() { }

  ngOnInit(): void {
  }

}
