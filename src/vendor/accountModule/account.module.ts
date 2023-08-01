import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { VendorAccountService } from "./account.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VendorAccountEntity } from "./account.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([VendorAccountEntity])
    ],
    controllers: [
        AccountController
    ],
    providers: [
        VendorAccountService
    ]
})
export class VendorAccountModule {

}