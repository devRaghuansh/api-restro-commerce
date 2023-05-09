import { Module } from "@nestjs/common";
import { AddressController } from "./addressModule/address.controller";
import { AccountContorller } from "./accountModule/account.controller";
import { OrderController } from "./orderModule/order.controller";
import { CouponController } from "./couponModule/coupon.controller";
import { LogoutController } from "./logoutModule/logout.controller";
@Module({
    imports: [],
    controllers: [
        AddressController,
        AccountContorller,
        OrderController,
        CouponController,
        LogoutController

    ],
    providers: []
})
export class CustomerModule {

}