import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public login(user:User){
   return this._http.post<any>("http://localhost:8080/login",user)
  }

   public register(user:User){
    return this._http.post<any>("http://localhost:8080/registeruser",user)
   }
}
