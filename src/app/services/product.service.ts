import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categoryValue:string="";

  products:Product[]=[
    new Product('shirts',1,"Shirt",200,"Fit Type: Regular, Material - 100% Cotton, Regular fit and Full sleeve shirt, Collar style - Classic collar, Cuff style - Single cuff",'/assets/images/SHIRT.jpg'),
    new Product('pants',2,"Pants",150,"Fit Type: Slim, Peter England Textured Light Black Pants, Fit type: Slim, Special size type: Standard",'/assets/images/pants.jpeg'),
    new Product('phone',3,"Phone",15000," Display: FHD+ (1080x2400) AMOLED Dot display, Camera: 64 MP Quad Rear camera, 2MP Macro and Portrait lens| 13 MP Front camera, Processor: MediaTek Helio G95 Octa-core",'/assets/images/phone.jpeg'),
    new Product('laptop' ,4,"Laptop",73000,"Processor: AMD Ryzen 5 5600U (up to 4.2 GHz max boost clock, 16 MB L3 cache, 6 cores, 12 threads), Memory & Storage: 16 GB DDR4-3200 MHz RAM (onboard) | Storage: 512GB PCIe NVMe M.2 SSD, Display: 33.8 cm (13.3) diagonal, WUXGA (1920 x 1200), IPS, micro-edge, anti-glare",'/assets/images/laptop.jpeg'),
    new Product('tv',5,"TV ",25000,"Resolution: HD Ready Android TV (1366x768) Refresh Rate: 60 hertz, Connectivity: 3 HDMI ports to connect set box, Smart TV Features : Built-In Wi-Fi,   Disney+Hotstar and more, Display : LED Panel , Warranty Information: 1 year warranty on product and 1 year extra on Panel."
    ,'/assets/images/tv.jpeg'),
    new Product(' powerbank ',6,"PowerBank",1500,"18W Fast Charging, Triple port output, Dual input port (Micro-USB/USB-C, Charging Time : 6.9 hours, Power Delivery, Advanced 12 Layer chip protection, Smart power management, 6 months domestic warranty",'/assets/images/powerBank.jpeg'),
  ]
 filteredproducts:Product[]

  constructor() { }
  getProducts():Product[]{
    if(this.categoryValue==""){
      console.log("no")
      return this.products
    }
    this.filteredproducts=this.filtered()
    return this.filteredproducts
    
    }
  
      
    filtered():Product[]{
      this.filteredproducts=[]
      for(let p of this.products){
        console.log(this.categoryValue)
        console.log(p.category)
        if(p.category===this.categoryValue){
          console.log("inside")
        
          this.filteredproducts.push(p)

        }
      }
      return this.filteredproducts

    }
    
  

  
  setCategory(val:string){
    this.categoryValue=val;
    console.log(this.categoryValue)
   
  }
 resetCategory(){
   this.categoryValue="";
   return this.products
 }
}


// if(this.categoryValue==""){
//   console.log("no")
//   return this.products
// }

// this.products=this.products.filter(item=>item.category===this.categoryValue)
// console.log('hi') 
// return this.products

// }