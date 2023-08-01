import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { VendorAccountService } from "./account.service";

@Controller('vendor')
export class AccountController {
    constructor(private vendorAccountService: VendorAccountService){

    }
    @Get('account')
    getVendorProfile() {
        return 'Welcome vendor'
    }

    @Post('account')
    createVendorProfile(@Body() newVendorData) {
        console.log("New vendor Data", newVendorData)
        return this.vendorAccountService.createVendorAccuntProfile(newVendorData)
    }

    @Put('account')
    editVendorProfile(){
        return 'edit vendor profile'
    }

    @Delete('account')
    deleteVendorProfile() {
        return 'delete vendor profile'
    }
}