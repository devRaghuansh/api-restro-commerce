import { Controller, Get } from "@nestjs/common";

@Controller('customer')
export class ProfileContorller {
    @Get('profile')
    getProfile() {
        return 'Cutomer profile'
    }
}