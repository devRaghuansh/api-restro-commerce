import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CustomerCartService } from "./cart.service";

@Controller("customer")
export class CartController {
    constructor(
        private customerCartService : CustomerCartService
    ){

    }
    @Get('cart')
    getCartDetail() {
        return 'cart'
    }

    @Post('cart')
    addCartDetail(@Body() cartDetail) {
        return this.customerCartService.createCustomerCart(cartDetail)
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