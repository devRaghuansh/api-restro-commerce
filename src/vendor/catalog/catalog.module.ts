import { Module } from "@nestjs/common";
import { CategoriesController } from "./categoriesModule/categories.controller";
import { ProductController } from "./productModule/product.controller";
import { ProductReviewController } from "./productReviewModule/productReview.controller";
import { CatalogProductEntity } from "./productModule/product.entity";
import { CatalogCategoryEntity } from "./categoriesModule/category.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogProductReviewEntity } from "./productReviewModule/productreview.entity";


@Module({
    imports: [ TypeOrmModule.forFeature([CatalogProductEntity,CatalogCategoryEntity,
        CatalogProductReviewEntity
    ])],
    controllers: [
        CategoriesController,
        ProductController,
        ProductReviewController
    ],
    providers: []
})
export class CatalogModule {

}