import { Module } from "@nestjs/common";
import { AdminAuthenticationController } from "./adminAuthenticationModule/adminAuthentication.controller";
import { DeliveryAuthenticationController } from "./deliveryAuthenticationModule/deliveryAuthentication.controller";
import { SalesAuthenticationController } from "./salesAuthenticationModule/salesAuthentication.controller";
import { UserAuthenticationController } from "./userAuthenticationModule/userAuthentication.controller";

@Module({
    imports: [],
    controllers: [
        AdminAuthenticationController,
        DeliveryAuthenticationController,
        SalesAuthenticationController,
        UserAuthenticationController
    ],
    providers: []
})
export class AuthenticationModule {

}