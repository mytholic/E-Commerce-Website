import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateDetailsComponent } from './components/update-details/update-details.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent 
  },
  {
    path:'product', component:ProductsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'tracking',component:OrderTrackingComponent
  },
  {
    path:'account',component:UpdateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
