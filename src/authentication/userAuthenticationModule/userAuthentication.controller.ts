import { Body, Controller, Get, Post } from "@nestjs/common";

import { UserAuthenticationService } from "./userAuthentication.service";
import { UserLoginDto } from "./userAuthentication.dto";

@Controller('authentication')
export class UserAuthenticationController {
    constructor(
        private userAuthenticationService : UserAuthenticationService
    ){}

    @Post('user')
    async userAuthenticationLogin(@Body() userLoginDto: UserLoginDto) {
        return this.userAuthenticationService.loginUser(userLoginDto)
    }
}