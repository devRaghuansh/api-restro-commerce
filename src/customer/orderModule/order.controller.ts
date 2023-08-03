import { Body, Controller, Get, Post } from "@nestjs/common";
import { CustomerOrderService } from "./order.service";


@Controller('customer')
export class OrderController {
    constructor(private customerOrderService: CustomerOrderService){}
    @Get('order-detail')
    getOrderDetail(): String {
        return 'Order Detail'
    }

    @Post('order')
    createOrderDetail(@Body() orderDetail) {
        return this.customerOrderService.createCustomerOrder(orderDetail)
    }

    @Get('order-list')
    getOrderList(): String {
        return 'Order List'
    }
}