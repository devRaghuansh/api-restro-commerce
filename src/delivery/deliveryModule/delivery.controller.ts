import { Controller, Get } from "@nestjs/common";


@Controller('delivery')
export class DeliveryController {
    @Get('person')
    getDeliveryDetail() {
        return 'Delivery person'
    }
}