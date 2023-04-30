import { Controller, Get } from "@nestjs/common";

@Controller('catalog')
export class CategoriesController {

    @Get('category') 
    getCategories() {
        return 'Categories controller'
    }
}