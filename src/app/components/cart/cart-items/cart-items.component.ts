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
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  remove(product:Product){
        this.cartservice.removeItems(product);
        this.cartservice.TotalCost()
        

  }
  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    this.cartservice.TotalCost()}
}
