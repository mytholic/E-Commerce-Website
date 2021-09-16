import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listOfProducts:Product[]=[]
  cartTotal:number;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.listOfProducts=this.cartservice.getItems()
    this.listOfProducts.forEach(item=>{
      this.cartTotal=this.cartservice.TotalCost()
    })
    this.cartservice.castTotal.subscribe(cartTotal=>this.cartTotal=cartTotal)
  }
  
  }

