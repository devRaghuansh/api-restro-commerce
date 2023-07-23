import { Injectable, UnauthorizedException } from "@nestjs/common"
import { UserLoginDto } from "./userAuthentication.dto"
import { AccountService } from "../../customer/accountModule/account.service";

import { JwtService } from "@nestjs/jwt";


 @Injectable()
export class UserAuthenticationService {
    constructor(private accountService: AccountService,private jwtService: JwtService) {}
    async loginUser(userLoginCredential : UserLoginDto) {
        const user = await this.validateUser(userLoginCredential);
        const payload = {
            userId: user,
        };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async validateUser(userLoginCredential : UserLoginDto) {
        const {email, password} = userLoginCredential
        const userDetail = await this.accountService.findUserByEmail(email)
        console.log("user detail ", userDetail.email)
        if (!(await userDetail.validatePassword(password))) {
        console.log("user detail ", userDetail.email)
            throw new UnauthorizedException();
        }
        return email
    }
}