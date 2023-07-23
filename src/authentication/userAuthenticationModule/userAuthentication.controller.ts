import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";

import { UserAuthenticationService } from "./userAuthentication.service";
import { UserLoginDto } from "./userAuthentication.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@Controller('authentication')
export class UserAuthenticationController {
    constructor(
        private userAuthenticationService : UserAuthenticationService
    ){}

    @Post('user')
    async userAuthenticationLogin(@Body() userLoginDto: UserLoginDto) {
        return this.userAuthenticationService.loginUser(userLoginDto)
    }


  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test() {
    return 'You have authorized!';
  }
}