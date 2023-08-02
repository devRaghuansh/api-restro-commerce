import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { CustomerAddressService } from "./address.service";

@Controller('customer')
export class AddressController {
    constructor(
        private customerAccountService: CustomerAddressService
    ){}
    @Get('address')
    getAddress(): String {
        return 'customer Address'
    }

    @Post('address')
    addAddress(@Body() newCustomerAddress) {
        return  this.customerAccountService.createCustomerAddress(newCustomerAddress)
    }

    @Put('address')
    editAddress(): String {
        return 'Edit Address'
    }

    @Delete('address')
    deleteAddress(): String {
        return 'Delete Address'
    }
}