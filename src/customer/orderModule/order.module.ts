import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerOrderEntity } from "./order.entity";
import { OrderController } from "./order.controller";
import { CustomerOrderService } from "./order.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([CustomerOrderEntity])
    ],
    controllers: [
        OrderController
    ],
    providers: [
        CustomerOrderService
    ]
})
export class CustomerOrderModule {

}