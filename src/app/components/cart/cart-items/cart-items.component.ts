import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input()item:Product
  cartTotal:number
  count:number
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  remove(product:Product){
        this.cartservice.removeItems(product);
        this.cartservice.TotalCost()
        this.count= this.cartservice.itemRemovedFromCart()
        

  }
  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    this.count=this.cartservice.itemCountInCart()
    this.cartservice.TotalCost()}

}
