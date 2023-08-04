import { Module } from "@nestjs/common";
import { CatalogProductEntity } from "./product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./product.controller";
import { ProductServie } from "./product.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CatalogProductEntity])
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ProductServie
    ]
})
export class CatalogProductModule {

}