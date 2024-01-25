import { MinLength, IsNotEmpty, IsNumber } from "class-validator";

export class ProductDTO{
    @IsNotEmpty()
    categoryID?: number;

    @MinLength(5, {message: 'This field must be than 5 charactor' })
    productName?: string;
    @IsNumber()
    price?: number;
};