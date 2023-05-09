import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('customer')
export class AccountContorller {
    @Get('account')
    getProfile() {
        return 'Cutomer profile'
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