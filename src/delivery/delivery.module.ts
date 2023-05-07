import { Module } from "@nestjs/common";
import { DeliveryController } from "./deliveryModule/delivery.controller";


@Module({
    imports: [],
    controllers: [
        DeliveryController
    ],
    providers: []
})
export class DeliveryModule {

}