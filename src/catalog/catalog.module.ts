import { Module } from "@nestjs/common";
import { CategoriesController } from "./categoriesModule/categories.controller";
import { ProductController } from "./productModule/product.controller";
import { ProductReviewController } from "./productReviewModule/productReview.controller";


@Module({
    imports: [],
    controllers: [
        CategoriesController,
        ProductController,
        ProductReviewController
    ],
    providers: []
})
export class CatalogModule {

}