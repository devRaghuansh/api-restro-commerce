import { Controller, Get  } from "@nestjs/common";

@Controller('catalog')
export class ProductController {
    @Get('product')
    getProduct(): String {
        return 'get Product'
    } 
}