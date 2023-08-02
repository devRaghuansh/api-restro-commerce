import { Module } from "@nestjs/common";
import { AccountContorller } from "./accountModule/account.controller";
import { OrderController } from "./orderModule/order.controller";
import { CouponController } from "./couponModule/coupon.controller";
import { LogoutController } from "./logoutModule/logout.controller";
import { accountProviders } from "./accountModule/account.repositories";
import { AccountEntity } from "./accountModule/account.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountService } from "./accountModule/account.service";
import { CartController } from "./cartModule/cart.controller";
import { CustomerCartEntity } from "./cartModule/cart.entity";
import { CustomerAddressModule } from "./addressModule/address.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity, CustomerCartEntity]),
        CustomerAddressModule
    ],
    controllers: [
        AccountContorller,
        OrderController,
        CouponController,
        LogoutController,
        CartController
    ],
    providers: [
AccountService
       // ...accountProviders
    ],
    exports:[
        AccountService
    ]
})
export class CustomerModule {

}