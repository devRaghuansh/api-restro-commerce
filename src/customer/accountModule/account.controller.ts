import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountDTO } from "./account.dto";

@Controller('customer')
export class AccountContorller {
     constructor(private accountService: AccountService) {

     }
    @Get('account')
    getProfile(@Body() user) {
        console.log(user)
        return 'hello'
    }
    @Post('account')
    createProfile(@Body() user : AccountDTO) {
        return this.accountService.createAccount(user)
    }
    @Put('account')
    editProfile() {
        return 'Customer Profile'
    }

    @Delete('account')
    deleteAccount() {
        return 'Delete Account'
    }
}