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
    createProduct(@Body() productDTO:ProductDTO ): ResponseData<Product>
    {
        try{
        return new ResponseData<Product>(this.productService.createProduct(productDTO),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<Product>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
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
    updateProduct(@Body() productDTO:ProductDTO, @Param('id') id:number): ResponseData<Product>{
        try{
        return new ResponseData<Product>(this.productService.updateProduct(productDTO,id),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<Product>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id:number): ResponseData<boolean>{
        try{
        return new ResponseData<boolean>(this.productService.deleteProduct(id),HttpStatus.SUCCESS, HttpMessage.ERROR);
        }catch(err){
        return new ResponseData<boolean>(null,HttpStatus.SUCCESS, HttpMessage.ERROR);
        }
    }
}