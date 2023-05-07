import { Controller, Get } from "@nestjs/common";


@Controller('customer')
export class AddressController {
    @Get('address')
    getAddress(): String {
        return 'customer Address'
    }
}