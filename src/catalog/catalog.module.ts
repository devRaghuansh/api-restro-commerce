import { Module } from "@nestjs/common";
import { CategoriesController } from "./categoriesModule/categories.controller";
import { ProductController } from "./productModule/product.controller";
import { ProductReviewController } from "./productReviewModule/productReview.controller";
import { CatalogProductEntity } from "./productModule/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [ TypeOrmModule.forFeature([CatalogProductEntity])],
    controllers: [
        CategoriesController,
        ProductController,
        ProductReviewController
    ],
    providers: []
})
export class CatalogModule {

}