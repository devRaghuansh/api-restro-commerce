import { Controller, Post, Put, Delete } from "@nestjs/common";

@Controller('catalog')
export class CategoriesController {

    @Post('category') 
    addCategory() {
        return 'Categories add'
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