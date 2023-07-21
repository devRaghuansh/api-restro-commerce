import { Injectable } from "@nestjs/common"
import { UserLoginDto } from "./userAuthentication.dto"
import { JwtService } from "@nestjs/jwt";


 @Injectable()
export class UserAuthenticationService {
    constructor(private jwtService: JwtService) {}
    async loginUser(userLoginCredential : UserLoginDto) {
        const user = await this.validateUser(userLoginCredential);
        const payload = {
            userId: user,
        };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    validateUser(userLoginCredential : UserLoginDto) {
        const {email, password} = userLoginCredential

        return email
    }
}