import { Controller, Delete, Get, Post, Put } from "@nestjs/common";


@Controller("customer")
export class CartController {
    @Get('cart')
    getCartDetail() {
        return 'cart'
    }

    @Post('cart')
    addCartDetail() {
        return 'Add cart Detail '
    }

    @Put('cart')
    updateCartDetail() {
        return 'update Cart Detail' 
    }

    @Delete('cart')
    deleteCaerDetail() {
        return 'delete Cart detail'
    }


}