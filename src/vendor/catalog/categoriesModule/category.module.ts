import { Module } from "@nestjs/common";
import { CatalogCategoryEntity } from "./category.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogCategoryController } from "./categories.controller";
import { CatalogCategoryService } from "./category.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CatalogCategoryEntity])
    ],
    controllers: [
        CatalogCategoryController
    ],
    providers: [
        CatalogCategoryService
    ]
})

export class CatalogCategoryModule {
}