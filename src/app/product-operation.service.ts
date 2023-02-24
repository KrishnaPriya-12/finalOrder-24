import { Injectable } from '@angular/core';
import { ProductDTO } from './product-dto';


@Injectable({
  providedIn: 'root'
})
export class ProductOperationService {

  constructor() {
   let p1:ProductDTO=new ProductDTO(101,'rose',10,'plant','Summer','rose.jpeg','red flowering plant with 10 flowers a day',6,100,4)
    let p2:ProductDTO=new ProductDTO(102,'marigold',10,'plant','Winter','rose.jpeg','white flowering plant and 12 flowers per day',6,100,4)
    //let p3:Planter=new Planter(101,'rose',10,'plant','Summer','rose.jpeg','abc',6,100,4)
    //let p4:Planter=new Planter(102,'marigold',10,'plant','Winter','marigold.jpeg','egf',6,100,4)
    this.productArr.push(p1)
    this.productArr.push(p2)
   }

  productArr:ProductDTO[] = [];

  addProduct(productFromAdmin:ProductDTO)
  {
    
    this.productArr.push(productFromAdmin); 
    console.log("Inside Product Service : Product Added "+productFromAdmin.productId);
    console.log(" Total Products Are :- "+this.productArr.length);
    
  }
  getProductArr():ProductDTO[]
  {
    return this.productArr;
  }
  getProductByNumber(searchProductId:number):ProductDTO
  {
    let outputProduct:ProductDTO = new ProductDTO(0,'',0,'','','','',0,0,0);
    for(let i=0;i<this.productArr.length;i++)
    {
      let thisProduct:ProductDTO = this.productArr[i];
        if(thisProduct.productId == searchProductId)
        {
          outputProduct = thisProduct;
          break;
        }
    }
    
    return outputProduct;
  }
}
