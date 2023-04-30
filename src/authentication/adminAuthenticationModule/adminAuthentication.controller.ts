import { Controller, Get } from "@nestjs/common";

@Controller('authentication')
export class AdminAuthenticationController {

    @Get('admin')
    adminAuthentication(){
        return 'Hello Admin controller'
    }
}