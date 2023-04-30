import { Controller, Get } from "@nestjs/common";


@Controller('authentication')
export class SalesAuthenticationController {

    @Get('sales') 
    salesAuthentication () {
        return 'Sales Authentication'
    }
}

