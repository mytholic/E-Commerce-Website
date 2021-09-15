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

    let itemExist=false
  
    for(let i in this.cartItems){
      if(this.cartItems[i].id==product.id){
        this.cartItems[i].quantity=this.cartItems[i].quantity+1
        itemExist=true
        break;
      }
      }
    
    if(!itemExist){
      this.cartItems.push(product);
    }
   
    }
    
  
    


  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
 

}

