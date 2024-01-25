import { ProductDTO } from './../../dto/product.dto';
import { HttpMessage, HttpStatus } from './../../global/globalEnum';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { Product } from 'src/models/product.model';

@Controller('products')

export class ProductsController {

    constructor(private readonly productService: ProductService){}
    @Get()
    getProducts(): ResponseData<Product[]>{
        try{
        return new ResponseData<Product[]>(this.productService.getProducts(),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<Product[]>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);

        }
    }
    // createProduct(@Body(new ValidationPipe()) productDTO:ProductDTO ): ResponseData<ProductDTO>

    @Post()
    createProduct(@Body() productDTO:ProductDTO ): ResponseData<ProductDTO>
    {
        try{
        return new ResponseData<ProductDTO>(productDTO,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<ProductDTO>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(@Param('id')id:number): ResponseData<Product>{
        try{
        return new ResponseData<Product>(this.productService.detailProduct(id),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<Product>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(): ResponseData<string>{
        try{
        return new ResponseData<string>(this.productService.updateProduct(),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<string>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(): ResponseData<string>{
        try{
        return new ResponseData<string>(this.productService.deleteProduct(),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<string>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }
}