import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  constructor(private router:Router,private service:RegistrationService) { }

  ngOnInit(): void {
  }
  login(){
    this.service.login(this.user).subscribe(
    data =>this.router.navigate(['/product']),
    error=>alert("incorrect credentials"))
   
  }
  registration(){
    
  
    if(this.user.password==this.user.cpassword){  
    this.service.register(this.user).subscribe(
    data =>alert("registered successfully"),
    error=>alert("user exist"))}
    else{
      alert("no correct")
    }
    


}
}
