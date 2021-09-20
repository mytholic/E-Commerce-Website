import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { RegistrationService } from 'src/app/registration.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  orderDetails:Cart[]=[]
  completeOrder:any=null;
  orderTracker=["Order Placed","Order Dispatched","Order In Transit","Order Delivered"]
  message:string
  username:string
  item:Cart
  constructor(private cartservice:CartService,private res:RegistrationService,private router:Router) { }

  ngOnInit(): void {
 this.res.getOrders().subscribe(
  data =>{this.completeOrder=data
    
  this.filterOrders()},
  error=>alert("user exist"))

  
}


  filterOrders(){
    console.log(this.username)
    this.username=this.res.username
    console.log(this.username)
    for(let item of this.completeOrder){
     // console.log(item.username)
      if(this.res.username==item.username){
        console.log("isnide")
        console.log(item.username)
        this.orderDetails.push(item)
      }
    }

  }

  logout(){
    this.cartservice.clearCart()

    this.router.navigate(['/login'])
  }
  orderTracking(){
    if(this.orderDetails.length>0){
    let count = 0;
     setInterval(() => {
     
       this.message = this.orderTracker[count]
       count++
     },3000)
  }
  else{
    alert("There isn't any pending orders")
  }
}

}
