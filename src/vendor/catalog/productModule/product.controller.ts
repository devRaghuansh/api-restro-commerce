import { Controller, Delete, Get, Post, Put  } from "@nestjs/common";

@Controller('catalog')
export class ProductController {
    @Post('product')
    addProduct(): String {
        return 'get Product'
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