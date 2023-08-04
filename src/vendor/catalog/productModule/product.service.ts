import { Injectable } from "@nestjs/common";
import { CatalogProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductServie{
    constructor(
        @InjectRepository(CatalogProductEntity)
        private catalogProductEntity: Repository<CatalogProductEntity>
    ){}
    createCatalogProduct(newProductData) {
        const createProduct = this.catalogProductEntity.create(newProductData)
        const saveProduct = this.catalogProductEntity.save(createProduct)
        return saveProduct
    }
}






