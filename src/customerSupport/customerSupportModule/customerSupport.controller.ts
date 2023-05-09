import { Controller, Get } from "@nestjs/common";

@Controller('customer-support')
export class CustomerSupportControl {
    @Get('support')
    getCustomerSupport(){
        return 'Customer Support module'
    }
}