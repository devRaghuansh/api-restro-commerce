import { Module } from "@nestjs/common";
import { ProductReviewController } from "./productReviewModule/productReview.controller";
import { CatalogProductEntity } from "./productModule/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogProductReviewEntity } from "./productReviewModule/productreview.entity";
import { CatalogCategoryModule } from "./categoriesModule/category.module";
import { CatalogProductModule } from "./productModule/product.module";

@Module({
    imports: [ TypeOrmModule.forFeature([CatalogProductEntity,
        CatalogProductReviewEntity
    ]),
    CatalogCategoryModule,
    CatalogProductModule
],
    controllers: [
        ProductReviewController
    ],
    providers: []
})
export class CatalogModule {

}