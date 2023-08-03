import { Controller, Post, Put, Delete, Body } from "@nestjs/common";
import { CatalogCategoryService } from "./category.service";
@Controller('catalog')
export class CatalogCategoryController {
    constructor(
        private catalogCategoryService: CatalogCategoryService
    ){}
    @Post('category') 
    addCategory(@Body() newCategoryData) {
        return this.catalogCategoryService.createCatalogCategory(newCategoryData)
    }

    @Put('category')
    updateCategory() {
        return 'Categories update'
    }

    @Delete('category')
    deleteCategory() {
        return 'Delete category'
    }
}