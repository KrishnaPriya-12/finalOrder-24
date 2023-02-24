import { Component } from '@angular/core';
import { ProductDTO } from '../product-dto';
import { ProductOperationService } from '../product-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  __productService:ProductOperationService; // creating object of Service layer
  router:Router;

  
  allProducts : Array<ProductDTO> = [];
  watchList : Array<ProductDTO> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(productService:ProductOperationService,router:Router)
  {
    this.__productService = productService;
    this.allProducts = this.__productService.getProductArr();
    this.router = router;
    console.log(this.allProducts.length);
  }

  viewProductDetails(pid:string)
  {
    
    this.router.navigate(['productDetail',pid]);
  }

  addOrder()
  {
    
    this.router.navigate(['addOrder']);
  }

  placeOrder(productId:number,productName:string,category:string,bloomSeason:string,about:string,discount:number,height:number,price:number,starRating:number)
  {
    localStorage.removeItem('productId')
    localStorage.removeItem('productName')
    localStorage.removeItem('height')
    localStorage.removeItem('category')
    localStorage.removeItem('bloomSeason')
    localStorage.removeItem('about')
    localStorage.removeItem('discount')
    //localStorage.removeItem('imageName')
    localStorage.removeItem('price')
    localStorage.removeItem('starRating')

  
  
    localStorage.setItem("productId",productId+'');
    localStorage.setItem("productName",productName);
    localStorage.setItem("height",height+'');
    localStorage.setItem("category",category);
    localStorage.setItem("bloomSeason",bloomSeason);
    localStorage.setItem("about",about);
    localStorage.setItem("discount",discount+'');
    //localStorage.setItem("imageName",imageName);
    localStorage.setItem("price",price+'');
    localStorage.setItem("starRating",starRating+'');
   
    

    this.router.navigate(['order']);
    
  }

  addWatchlist(product:string)
  {
    let addProductId = parseInt(product);
    
    this.allProducts.forEach(p=>{
      if(p.productId == addProductId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

}
