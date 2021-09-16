import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.css']
})
export class ProductListItemsComponent implements OnInit {
  @Input() items:Product
  count:number
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
   
  }
  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    this.count=this.cartservice.itemCountInCart()
    this.cartservice.castCount.subscribe(count=>this.count=count)
    alert("added successfully");
  }

}
