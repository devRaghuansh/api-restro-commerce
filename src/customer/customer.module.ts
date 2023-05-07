import { Module } from "@nestjs/common";
import { AddressController } from "./addressModule/address.controller";
import { ProfileContorller } from "./profileModule/profile.controller";

@Module({
    imports: [],
    controllers: [
        AddressController,
        ProfileContorller
    ],
    providers: []
})
export class CustomerModule {

}