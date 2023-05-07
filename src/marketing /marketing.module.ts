import { Module } from "@nestjs/common";
import { CouponModuleController } from "./couponModule/coupanModule.controller";

@Module({
    imports: [],
    controllers: [
        CouponModuleController
    ],
    providers: []
})
export class MarketingModule {

}