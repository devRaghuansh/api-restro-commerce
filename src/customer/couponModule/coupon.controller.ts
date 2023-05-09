import { Controller, Get } from "@nestjs/common";

@Controller('customer')
export class CouponController {

    @Get('coupon')
    getCouponDetail(): String {
        return 'coupon detail'
    }
}