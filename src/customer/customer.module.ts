import { Module } from "@nestjs/common";
import { AddressController } from "./addressModule/address.controller";
import { AccountContorller } from "./accountModule/account.controller";
import { OrderController } from "./orderModule/order.controller";
import { CouponController } from "./couponModule/coupon.controller";
import { LogoutController } from "./logoutModule/logout.controller";
import { accountProviders } from "./accountModule/account.repositories";
import { AccountEntity } from "./accountModule/account.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity])
    ],
    controllers: [
        AddressController,
        AccountContorller,
        OrderController,
        CouponController,
        LogoutController

    ],
    providers: [
        ...accountProviders
    ]
})
export class CustomerModule {

}