import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  constructor(private router:Router,private cartservice:CartService,private service:RegistrationService) { }
  user=new User();
  username:string
  name:string
  completeusers:any
  currentuser:any
  ngOnInit(): void {
    // this.service.getusers().subscribe(
    //   data =>{this.completeusers=data
        
    //   this.filterUsers()},
    //   error=>alert("user exist"))
    alert("If no update is required leave that field blank")
  }
//  filterUsers(){
//    for(let u of this.completeusers){
//      if(u.username=this.service.username){
//        this.currentuser=u
//        break
//      }
//    }

//  }

  logout(){
    this.cartservice.clearCart()
    this.router.navigate(['/login'])
  }
  update(){
    this.user.username=this.service.username
    console.log(this.user.username)
    console.log(this.user)
    this.service.update(this.user).subscribe(
      data =>alert("update successfully"),
      error=>alert("incorrect info , try again"))
      
  }
}
