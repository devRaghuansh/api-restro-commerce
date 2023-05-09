import { Controller, Get } from "@nestjs/common";

@Controller('customer')
export class LogoutController {

    @Get('logout')
    customerLogout(): String {
        return 'logout'
    }
}