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
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.listOfProducts=this.cartservice.getItems()
  }

}
