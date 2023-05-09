import { Controller, Get, Post, Put, Delete } from "@nestjs/common";


@Controller('site')
export class PageController {
    @Get('page')
    getPage(): String {
        return 'get page'
    }

    @Post('page')
    addPage(): String {
        return 'Add Page'
    }

    @Put('page')
    editPage(): String {
        return 'edit Page'
    }

    @Delete('page')
    deletePage(): String {
        return 'Delete page'
    }
}