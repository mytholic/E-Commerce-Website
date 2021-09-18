import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  val:string;
  constructor(private service:ProductService) { }
  filter(val:string){
    this.service.setCategory(val);
    this.service.getProducts();
    console.log(val);
  }
  ngOnInit(): void {
  }

}
