import { Controller, Get } from "@nestjs/common";


@Controller('email')
export class EmailController {
    @Get('email')
    getEmailTemplate(): String {
        return 'Email String'
    }
}