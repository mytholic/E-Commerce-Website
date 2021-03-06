import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { ProductListItemsComponent } from './components/product-list/product-list-items/product-list-items.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountComponent } from './components/count/count.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { OrderTrackingItemsComponent } from './components/order-tracking-items/order-tracking-items.component';
import { UpdateDetailsComponent } from './components/update-details/update-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    ProductListComponent,
    CartItemsComponent,
    ProductListItemsComponent,
    FilterComponent,
    CountComponent,
    OrderTrackingComponent,
    OrderTrackingItemsComponent,
    UpdateDetailsComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
