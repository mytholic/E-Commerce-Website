import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
  listOfProducts:Product[]=[]


  constructor(private productService:ProductService) { 
   
    
  }
  filter(val:any){
    if(val.category=="none"){
     this.listOfProducts= this.productService.resetCategory()
    }else{
    this.productService.setCategory(val.category);
    this.listOfProducts=this.productService.getProducts();
    }
  }


  ngOnInit(): void {
    this.listOfProducts=this.productService.getProducts()
  }

}
