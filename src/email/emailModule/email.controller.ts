import { Controller, Get } from "@nestjs/common";


@Controller('email')
export class EmailController {
    @Get('email')
    getEmail(): String {
        return 'Email String'
    }
}