import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product('shirt',1,"Men's Formal Shirt",200,"Fit Type: Regular, Material - 100% Cotton, Regular fit and Full sleeve shirt, Collar style - Classic collar, Cuff style - Single cuff, Pattern: Solid Men’s Formal Shirt",'/assets/images/SHIRT.jpg'),
    new Product('pants',2,"Men's  Slim  Pants",150,"Fit Type: Slim, Peter England Textured Light Black Pants, Fit type: Slim, Special size type: Standard",'/assets/images/pants.jpeg'),
    new Product('phones',3,"Redmi Note 10S",15000," Display: FHD+ (1080x2400) AMOLED Dot display, Camera: 64 MP Quad Rear camera, 2MP Macro and Portrait lens| 13 MP Front camera, Processor: MediaTek Helio G95 Octa-core; Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity",'/assets/images/phone.jpeg'),
    new Product('laptops',4,"HP Pavilion",73000,"Processor: AMD Ryzen 5 5600U (up to 4.2 GHz max boost clock, 16 MB L3 cache, 6 cores, 12 threads), Memory & Storage: 16 GB DDR4-3200 MHz RAM (onboard) | Storage: 512GB PCIe NVMe M.2 SSD, Display: 33.8 cm (13.3) diagonal, WUXGA (1920 x 1200), IPS, micro-edge, anti-glare, 400 nits, 100% sRGB, Graphics & Networking: AMD Radeon Integrated Graphics | Realtek Wi-Fi CERTIFIED 6 (2x2) and Bluetooth 5.2 combo (Supporting Gigabit data rate)",'/assets/images/laptop.jpeg'),
    new Product('tv',5,"MI Android Smart TV ",25000,"Resolution: HD Ready Android TV (1366x768) Refresh Rate: 60 hertz, Connectivity: 3 HDMI ports to connect set box, Smart TV Features : Built-In Wi-Fi,   Disney+Hotstar and more, Display : LED Panel , Warranty Information: 1 year warranty on product and 1 year extra on Panel."
    ,'/assets/images/tv.jpeg'),
    new Product('power bank',6,"Mi Power Bank",1500,"18W Fast Charging, Triple port output, Dual input port (Micro-USB/USB-C, Charging Time : 6.9 hours, Power Delivery, Advanced 12 Layer chip protection, Smart power management, 6 months domestic warranty",'/assets/images/powerBank.jpeg'),
  ]

  constructor() { }
  getProducts():Product[]{
 return this.products
  }
}

