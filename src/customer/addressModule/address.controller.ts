import { Controller, Get, Post, Put, Delete } from "@nestjs/common";

@Controller('customer')
export class AddressController {
    @Get('address')
    getAddress(): String {
        return 'customer Address'
    }

    @Post('address')
    addAddress(): String {
        return 'Add address'
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