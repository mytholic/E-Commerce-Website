import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   username:string;
  
  constructor(private _http:HttpClient) { }

  public login(user:User){
   this.username=user.username;
   return this._http.post<any>("http://localhost:8080/login",user)
  }

   public register(user:User){
    return this._http.post<any>("http://localhost:8080/registeruser",user)
   }

  public update(user:User){
  
    return this._http.put<any>("http://localhost:8080/update",user)
   }
 
   public cartStorage(cart:Cart){
    return this._http.post<any>("http://localhost:8080/cart",cart)
   }
  public getOrders(){
    return this._http.get("http://localhost:8080/getOrders")
  }
}
