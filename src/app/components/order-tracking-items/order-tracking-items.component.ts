import { Component, OnInit ,Input} from '@angular/core';
import { Cart } from 'src/app/cart';

@Component({
  selector: 'app-order-tracking-items',
  templateUrl: './order-tracking-items.component.html',
  styleUrls: ['./order-tracking-items.component.css']
})
export class OrderTrackingItemsComponent implements OnInit {
  @Input() items:Cart
  constructor() { }

  ngOnInit(): void {
  }

}
