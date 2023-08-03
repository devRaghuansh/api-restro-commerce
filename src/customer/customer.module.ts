import { Module } from "@nestjs/common";
import { AccountContorller } from "./accountModule/account.controller";
import { OrderController } from "./orderModule/order.controller";
import { CouponController } from "./couponModule/coupon.controller";
import { LogoutController } from "./logoutModule/logout.controller";
import { accountProviders } from "./accountModule/account.repositories";
import { AccountEntity } from "./accountModule/account.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountService } from "./accountModule/account.service";
import { CustomerAddressModule } from "./addressModule/address.module";
import { CartModule } from "./cartModule/cartModule";

@Module({
    imports: [
        TypeOrmModule.forFeature([AccountEntity]),
        CustomerAddressModule,
        CartModule
    ],
    controllers: [
        AccountContorller,
        OrderController,
        CouponController,
        LogoutController,
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