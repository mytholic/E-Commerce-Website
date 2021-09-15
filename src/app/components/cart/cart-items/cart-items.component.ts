import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input()item:Product
  constructor() { }

  ngOnInit(): void {
  }

}
