import { Module } from "@nestjs/common";
import { AddressController } from "./address.controller";
import { CustomerAddressService } from "./address.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressEntity } from "./address.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([AddressEntity])
    ],
    controllers: [
        AddressController
    ],
    providers:[
        CustomerAddressService
    ]

})
export class CustomerAddressModule {

}