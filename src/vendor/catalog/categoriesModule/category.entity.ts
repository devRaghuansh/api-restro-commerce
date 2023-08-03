import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Catalog_Category')
export class CatalogCategoryEntity {

    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "varchar"
    })
    categoryName: String;

    @Column({
        type: "varchar"
    })
    image: String;

    @Column({
        type: "numeric"
    })
    parentInt: Number;

    @Column({
        type: "numeric"
    })
    sortOrder: Number;

    @Column({
        type: "varchar"
    })
    metaTagTitle: String;

    @Column({
        type: "varchar"
    })
    metaTagDescription: String;
    
    @Column({
        type: "varchar"
    })
    metaTagKeyword: String;

    @Column({
        type: "numeric"
    })
    status: number;
    
    @Column({
        type: "varchar"
    })
    description: String;
}