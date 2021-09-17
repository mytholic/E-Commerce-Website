import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count:number=0;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.count=this.cartservice.itemCountInCart()
    this.cartservice.castCount.subscribe(count=>this.count=count)
  }


}
