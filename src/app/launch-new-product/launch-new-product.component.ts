import { Component } from '@angular/core';
import { ProductDTO } from '../product-dto';
import { ProductOperationService } from '../product-operation.service';

@Component({
  selector: 'app-launch-new-product',
  templateUrl: './launch-new-product.component.html',
  styleUrls: ['./launch-new-product.component.css']
})
export class LaunchNewProductComponent {
  __productService:ProductOperationService;

  constructor(productService:ProductOperationService)
  {
    this.__productService = productService;
  }

  readPlanter(productId:string,productName:string,height:string,category:string,bloomSeason:string,price:string,discount:string,about:string,image:string,starRating:string)
  {
      console.log(productId+" "+productName+" "+height+" "+category+" "+bloomSeason+" "+price+" "+discount+" "+about+" "+image+" "+starRating);
      let productFromAdmin:ProductDTO = new ProductDTO(parseInt(productId),productName,parseInt(height),category,bloomSeason,image,about,parseInt(discount),parseInt(price),parseInt(starRating));
      this.__productService.addProduct(productFromAdmin);
  }

}
