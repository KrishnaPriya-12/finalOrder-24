import { Injectable } from '@angular/core';
import { CustomerDTO } from './customer-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AppUser {
  customerId: number;
  username: string;
  password: string;
  role: string;
  photo: string;

}

@Injectable({
  providedIn: 'root'
})
export class DataOperationService {
  
  allAppUsers:AppUser[] = [];

  constructor() {

    let user1: AppUser = {
      customerId: 1,
      username: "priya",
      password: "123",
      role: "Customer",
      photo: "profile.jpg"
    }
    let user2: AppUser = {
      customerId: 2,
      username: "sweetha",
      password: "123",
      role: "Customer",
      photo: "profile.jpg"
    }
    let user3: AppUser = {
      customerId: 4,
      username: "bhagya",
      password: "123",
      role: "Customer",
      photo: "profile.jpg"
    }
    let user4: AppUser = {
      customerId: 5,
      username: "keerthana",
      password: "123",
      role: "Customer",
      photo: "profile.jpg"
    }
    let user5: AppUser = {
      customerId: 6,
      username: "yamini",
      password: "123",
      role: "Customer",
      photo: "profile.jpg"
    }
    let user6: AppUser = {
      customerId: 0,
      username: "admin",
      password: "admin",
      role: "admin",
      photo: "profile.jpg"
    }

    this.allAppUsers = [user1, user2, user3, user4, user5, user6];


  }

  doLogin(ipUsername: string, ipPassword: string):boolean{
    localStorage.removeItem('customerId')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')



    console.log("inside Service : " + ipUsername + " & " + ipPassword);

    
for(let i=0;i<this.allAppUsers.length;i++)
{
   let thisUser:AppUser = this.allAppUsers[i];

   if(thisUser.username == ipUsername && thisUser.password == ipPassword)
   {
      localStorage.setItem("custometId",thisUser.customerId+'');
      localStorage.setItem("username",ipUsername);
      localStorage.setItem("role",thisUser.role);
      localStorage.setItem("loginStatus",true+'');
      localStorage.setItem("photo",thisUser.photo);

      console.log("inside service for true ");

      return true; // note the break is not applicable in forEach because of window property
   }

}



return false;
    
  } //end of doLogin

doUserLogout()
{
  localStorage.removeItem('customerId')
  localStorage.removeItem('username')
  localStorage.removeItem('role')
  localStorage.removeItem('loginStatus')
  localStorage.removeItem('photo')

  console.log("inside Service logout ");

}
}
