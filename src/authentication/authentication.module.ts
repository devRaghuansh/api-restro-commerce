import { Module } from "@nestjs/common";
//Module
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminAuthenticationController } from "./adminAuthenticationModule/adminAuthentication.controller";
import { DeliveryAuthenticationController } from "./deliveryAuthenticationModule/deliveryAuthentication.controller";
import { SalesAuthenticationController } from "./salesAuthenticationModule/salesAuthentication.controller";
import { UserAuthenticationController } from "./userAuthenticationModule/userAuthentication.controller";
import { UserAuthenticationService } from "./userAuthenticationModule/userAuthentication.service";
import { CustomerModule } from "../customer/customer.module";
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
    imports: [
        CustomerModule,
        PassportModule,
        JwtModule.registerAsync({
        useFactory: async () => ({
            secret: 'hello',
            }),
        }),
    ],
    controllers: [
        AdminAuthenticationController,
        DeliveryAuthenticationController,
        SalesAuthenticationController,
        UserAuthenticationController
    ],
    providers: [
        UserAuthenticationService,
        JwtStrategy
    ]
})
export class AuthenticationModule {

}