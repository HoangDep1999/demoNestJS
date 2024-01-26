import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
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

    createProduct(productDTO:ProductDTO): Product{
        const product:Product = {
            id: Math.random(),
            ...productDTO
        };
        this.products.push(product);

        return productDTO;
    }

    detailProduct(id:number): Product{
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(productDTO:ProductDTO, id:number): Product{
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryID = productDTO.categoryID;
        this.products[index].productName = productDTO.productName;
        this.products[index].price = productDTO.price;

        return this.products[index];
    }

    deleteProduct(id:number): boolean{
        const index = this.products.findIndex(item => item.id === Number(id));
        if(index !== -1){
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
}