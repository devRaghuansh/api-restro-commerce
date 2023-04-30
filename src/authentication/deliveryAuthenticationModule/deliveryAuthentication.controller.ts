import { Controller, Get } from "@nestjs/common";


@Controller('authentication')
export class DeliveryAuthenticationController {

    @Get('delivery')
    deliveryAuthentication(){
        return 'delivericontroller'
    }
}