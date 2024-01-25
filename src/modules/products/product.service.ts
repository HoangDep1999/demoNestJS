import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";

@Injectable()

export class ProductService {


    private products:Product[] = [
        {id:1,categoryID:2,price:8000,productName:"Key Board"},
        {id:2,categoryID:4,price:500,productName:"Hat"},
        {id:3,categoryID:5,price:1000,productName:"Mu luoi trai"},

    ];

    getProducts(): Product[] {
    
        return this.products;
    }

    createProduct(): string{
        return 'POST PRODUCT';
    }

    detailProduct(id:number): Product{
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(): string{
        return 'UPDATE PRODUCT';
    }

    deleteProduct(): string{
        return 'DELETE PRODUCT';
    }
}