import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { Cart } from 'src/app/cart';
import { RegistrationService } from 'src/app/registration.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listOfProducts:Product[]=[]
  cartTotal:number;
  activeUsername:string;
  address:string="abc";
  cart=new Cart();
  orderTracker=["Order Placed","Order Dispatched","Order In Transit","Order Delivered"]
  message:string

  constructor(private cartservice:CartService,private router:Router,private regservice:RegistrationService) { }

  ngOnInit(): void {
    this.listOfProducts=this.cartservice.getItems()
    this.listOfProducts.forEach(item=>{
      this.cartTotal=this.cartservice.TotalCost()
    })
    this.cartservice.castTotal.subscribe(cartTotal=>this.cartTotal=cartTotal)
  }
  getVal(val:string){

    this.cartservice.getAddress(val)
    console.log(this.address);
  }



  placeOrder(){
    if(this.cartTotal>0)
    this.listOfProducts=this.cartservice.getItems()
    this.listOfProducts.forEach(item=>{
      this.activeUsername=this.regservice.username
      this.cart.address=this.cartservice.address
      
      this.cart.item=item.name
      this.cart.quantity=item.quantity
      this.cart.price=item.price*item.quantity
      this.cart.username=this.activeUsername
      this.regservice.cartStorage(this.cart).subscribe(
        data =>alert("order placed successfully"),
        error=>console.log("error"));
      this.orderTracking();
    })
  }

  orderTracking(){
    let count = 0;
     setInterval(() => {
     
       this.message = this.orderTracker[count]
       count++
     },3000)
  }

  logout(){
    this.cartservice.clearCart()
  

    this.router.navigate(['/login'])
  }
  }

