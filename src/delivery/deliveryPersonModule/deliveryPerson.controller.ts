import { Controller, Get, Post, Put, Delete } from "@nestjs/common";


@Controller('delivery')
export class DeliveryPersonController {
    @Get('person')
    getDeliveryPersonDetail() {
        return 'Delivery person'
    }

    @Post('person')
    addDeliveryPersonDetail(): String {
        return 'add delivery person'
    }

    @Put('person')
    updateDeliveryPersonDetail(): String {
        return 'Update deliver person detail'
    }

    @Delete('person')
    deleteDeliveryPerson() {
        return 'delete delivery person'
    }
}