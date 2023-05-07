import { Controller, Get } from "@nestjs/common";

@Controller('sale')
export class OrderSummaryController {
    @Get('order-summary')
    getOrderSummary(): String {
        return 'Order summary'
    }
}