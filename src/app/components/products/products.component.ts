import { Component, OnInit ,Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  count:number;
  constructor(private cartservice:CartService,private router:Router) { }
  
  ngOnInit(): void {
   
    this.cartservice.castCount.subscribe(count=>this.count=count)
  }
cartPage(){
  this.router.navigate(['/cart'])
 
}
logout(){
  this.cartservice.clearCart()
  this.router.navigate(['/login'])
}
}


