import { Controller, Get } from "@nestjs/common";


@Controller('customer')
export class OrderController {
    @Get('order-detail')
    getOrderDetail(): String {
        return 'Order Detail'
    }

    @Get('order-list')
    getOrderList(): String {
        return 'Order List'
    }
}