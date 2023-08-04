import { Body, Controller, Delete, Get, Post, Put  } from "@nestjs/common";
import { ProductServie } from "./product.service";


@Controller('catalog')
export class ProductController {
    constructor(private productService: ProductServie){}
    @Post('product')
    addProduct(@Body() newProductData) {
        return this.productService.createCatalogProduct(newProductData)
    } 
    
    @Put('product')
    updateProduct(): String {
        return 'update product'
    }

    @Delete('product')
    deleteProduct(): String {
        return 'delete user'
    }

}