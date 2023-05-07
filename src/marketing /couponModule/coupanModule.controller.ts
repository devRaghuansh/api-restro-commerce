import { Controller, Get } from "@nestjs/common";

@Controller('marketing')
export class CouponModuleController {
    @Get('coupon')
    getCoupon(): String {
        return 'Coupon module'
    }
}