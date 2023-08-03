import { Injectable } from "@nestjs/common";
import { CatalogCategoryEntity } from "./category.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class CatalogCategoryService {

    constructor(
        @InjectRepository(CatalogCategoryEntity)
        private catalogCategoryEntity: Repository<CatalogCategoryEntity>
    ) {}
    createCatalogCategory(newCategoryData) {
        const createCategory = this.catalogCategoryEntity.create(newCategoryData)
        const saveCategory = this.catalogCategoryEntity.save(createCategory)
        return saveCategory
    }
}