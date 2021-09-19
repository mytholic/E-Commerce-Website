import { Component, OnInit } from '@angular/core';
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
  cart=new Cart();
  constructor(private cartservice:CartService,private router:Router,private regservice:RegistrationService) { }

  ngOnInit(): void {
    this.listOfProducts=this.cartservice.getItems()
    this.listOfProducts.forEach(item=>{
      this.cartTotal=this.cartservice.TotalCost()
    })
    this.cartservice.castTotal.subscribe(cartTotal=>this.cartTotal=cartTotal)
  }
  placeOrder(){
    if(this.cartTotal>0)
    this.listOfProducts=this.cartservice.getItems()
    this.listOfProducts.forEach(item=>{
      this.activeUsername=this.regservice.username
      this.cart.item=item.name
      this.cart.quantity=item.quantity
      this.cart.price=item.price*item.quantity
      this.cart.username=this.activeUsername
      this.regservice.cartStorage(this.cart).subscribe(
        data =>alert("order placed successfully"),
        error=>console.log("error"));
    })
  }
  logout(){
    this.cartservice.clearCart()
    this.router.navigate(['/login'])
  }
  }

