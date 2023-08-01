import { Module } from "@nestjs/common";
import { VendorAccountModule } from "./accountModule/account.module";

@Module({
    imports: [
        VendorAccountModule
    ],
    controllers: [
    ],
    providers: []
})
export class VendorModule {
}