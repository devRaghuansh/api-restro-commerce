import { Module } from "@nestjs/common";
import { DeliveryPersonController } from "./deliveryPersonModule/deliveryPerson.controller";


@Module({
    imports: [],
    controllers: [
        DeliveryPersonController
    ],
    providers: []
})
export class DeliveryModule {

}