import { Component, OnInit ,Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   countItems:number=this.cartservice.count;
  constructor(private cartservice:CartService,private router:Router) { }
  
  ngOnInit(): void {
  }
cartPage(){
  this.router.navigate(['/cart'])
}
}
