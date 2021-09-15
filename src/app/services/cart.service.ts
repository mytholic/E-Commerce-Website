import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  count:number;
  cartItems:Product[]=[];
  constructor() { 
    
  }
  initailvalue(){

  }
  addToCart(product: Product) {
    this.cartItems.push(product);
    this.count=this.count+1;
    
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
 

}

