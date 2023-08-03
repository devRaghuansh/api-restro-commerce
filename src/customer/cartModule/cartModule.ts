import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CustomerCartEntity } from "./cart.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerCartService } from "./cart.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([CustomerCartEntity])
    ],
    controllers: [
        CartController
    ],
    providers: [
        CustomerCartService
    ]
})
export class CartModule {

}