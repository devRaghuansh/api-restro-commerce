import { Controller, Get } from "@nestjs/common";


@Controller('authentication')
export class UserAuthenticationController {

    @Get('user')
    userAuthentication() {
        return 'user authentication'
    }
}