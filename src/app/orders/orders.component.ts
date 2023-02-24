import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  productId:string='';
  productName:string='';
  height:string='';
  category:string='';
  bloomSeason:string='';
  price:string='';
  discount:string='';
  imageName:string='';
  about:string='';
  starRating:string='';

  constructor() {
    this.productId=localStorage.getItem("productId")||'';
    this.productName=localStorage.getItem("productName") ||'';
    this.category=localStorage.getItem("category") ||'';
    this.height=localStorage.getItem("height") ||'';
    this.price=localStorage.getItem("price") ||'';
    this.discount=localStorage.getItem("discount") ||'';
    this.bloomSeason= localStorage.getItem("bloomSeason")||'';
    this.imageName=localStorage.getItem("imageName")||'';
    this.about=localStorage.getItem("about")||'';
    this.starRating=localStorage.getItem("starRating")||'';
   }

   goForBuy(product:string)
  {
    let productId = parseInt(product);
    console.log(" code to buy "+productId+" product");
    
  }

 
  
  
  

}
