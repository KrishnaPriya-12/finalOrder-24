import { Component } from '@angular/core';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {

  allOrders:OrderDTO [] = [];
  constructor(private orderService:OrderOperationService)
  {
    orderService.getAllOrdersFromSpring().subscribe(
      data=>{
          this.allOrders = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }

}
