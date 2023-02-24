export class ProductDTO {
    productId:number;
    productName:string;
    height:number;
    category:string;
    bloomSeason:string;
    imageName:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;

    

    constructor(
        productId:number,
        productName:string,
        height:number,
        category:string,
        bloomSeason:string,
        imageName:string,
        about:string,
        discount:number,
        price:number,
        starRating:number
    )
    {
          this.productId = productId;
          this.productName = productName;
          this.height = height;
          this.category = category;
          this.bloomSeason = bloomSeason;
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
          this.starRating = starRating;
    }
}
