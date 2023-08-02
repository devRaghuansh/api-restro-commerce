import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { VendorAccountService } from "./account.service";

@Controller('vendor')
export class AccountController {
    constructor(private vendorAccountService: VendorAccountService){

    }
    @Get('account')
    getVendorProfile() {
        return this.vendorAccountService.getVendorAccountProfile(1)
    }

    @Post('account')
    createVendorProfile(@Body() newVendorData) {
        console.log("New vendor Data", newVendorData)
        return this.vendorAccountService.createVendorAccountProfile(newVendorData)
    }

    @Put('account')
    editVendorProfile(){

        return 'edit vendor profile'
    }

    @Delete('account')
    deleteVendorProfile() {
        return this.vendorAccountService.deleteVendorAccountProfile()
        return 'delete vendor profile'
    }
}