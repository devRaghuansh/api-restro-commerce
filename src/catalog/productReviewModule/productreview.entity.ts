import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Catalog_Product_Review')
export class CatalogProductReviewEntity { 

    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number
    
    @Column({
        type: "numeric"
    })
    productId: Number

    @Column({
        type: "numeric"
    })
    orderProductId: Number

    @Column({
        type: "varchar"
    })
    review: String

    @Column({
        type: "varchar"
    })
    image: String
}