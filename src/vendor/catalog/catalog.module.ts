import { Module } from "@nestjs/common";
import { ProductController } from "./productModule/product.controller";
import { ProductReviewController } from "./productReviewModule/productReview.controller";
import { CatalogProductEntity } from "./productModule/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogProductReviewEntity } from "./productReviewModule/productreview.entity";
import { CatalogCategoryModule } from "./categoriesModule/category.module";


@Module({
    imports: [ TypeOrmModule.forFeature([CatalogProductEntity,
        CatalogProductReviewEntity
    ]),
    CatalogCategoryModule
],
    controllers: [
        ProductController,
        ProductReviewController
    ],
    providers: []
})
export class CatalogModule {

}