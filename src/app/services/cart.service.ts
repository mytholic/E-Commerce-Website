import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartTotal:number=0
  count:number=0;
  private countItem=new BehaviorSubject<number>(this.count);
  castCount=this.countItem.asObservable();
  private Total=new BehaviorSubject<number>(this.cartTotal);
  castTotal=this.Total.asObservable();

  cartItems:Product[]=[];
  constructor() { 
    
  }
  itemCountInCart(){
    this.count=this.count+1
    this.countItem.next(this.count)
    return this.count
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

  TotalCost(){
    this.cartTotal=0;
    this.cartItems=this.getItems()
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.quantity*item.price)

  })
  this.Total.next(this.cartTotal)
  return this.cartTotal
  }
    
  removeItems(product:Product){
    for(let i in this.cartItems){
      if(this.cartItems[i].id==product.id){
        if(this.cartItems[i].quantity>1){
          this.cartItems[i].quantity=this.cartItems[i].quantity-1
          break
        }
        else{
          this.cartItems.splice(this.cartItems.findIndex(a=>a.id===product.id),1)
       
        }
        
      }
    }
  }
    


  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.count=0
    this.cartTotal=0;
    this.Total.next(this.cartTotal)
    this.countItem.next(this.count)
    this.cartItems = [];
    return this.cartItems;
  }
 

}

