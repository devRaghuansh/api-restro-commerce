import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Catalog_Product')
export class CatalogProductEntity {

    @PrimaryGeneratedColumn({
        comment: 'This is unique identifier for account'
    })
    id: number

    @Column({
        type: "varchar"
    })
    productName: String;

    @Column({
        type: "varchar"
    })
    productDescription: String;

    @Column({
        type: "varchar"
    })
    sku: String;

    @Column({
        type: "varchar"
    })
    upc: String;

    @Column({
        type: "varchar"
    })
    hsn: String;

    @Column({
        type: "varchar"
    })
    image: String;
    
    @Column({
        type: "varchar"
    })
    productSlug: String;

    @Column({
        type: "numeric"
    })
    quantity: Number;

    @Column({
        type: "varchar"
    })
    metaTagTitle: String;

    @Column({
        type: 'varchar'
    })
    metaTagDescription: String;

    @Column({
        type: "varchar"
    })
    metaTagKeyword: String;

    @Column({
        type: "numeric"
    })
    packingCost: Number;

    @Column({
        type: "numeric"
    })
    shippingCost: Number;

    @Column({
        type: "numeric"
    })
    tax: Number;

    @Column({
        type: "numeric"
    })
    taxType: Number;

    @Column({
        type: "varchar"
    })
    others: string;

    @Column({
        type: "numeric"
    })
    categoryId: Number;

    @Column({
        type: "varchar"
    })
    relatedProductId: String;

    @Column({
        type: "numeric"
    })
    price: Number;

    @Column({
        type: "numeric"
    })
    outOfStockStatus: Number;

    @Column({
        type: "numeric"
    })
    requiredShipping: Number;

    @Column({
        type: "varchar"
    })
    dateAvailable: String;

    @Column({
        type: "numeric"
    })
    status: Number;

    @Column({
        type: "varchar"
    })
    sortOrder: String;

    @Column({
        type: "numeric"
    })
    quotationAvailable: Number;

    @Column({
        type: "numeric"
    })
    hasTirePrice: Number;

    @Column({
        type: "varchar"
    })
    productSpecial: String;

    @Column({
        type:"varchar"
    })
    productDiscount: String;

    @Column({
        type: "varchar"
    })
    tirePrices: String;

    @Column({
        type: "varchar"
    })
    productAttribute: String;
    
    @Column({
        type: "varchar"
    })
    height: String;

    @Column({
        type: "varchar"
    })
    weight: String;

    @Column({
        type: "varchar"
    })
    length: String;

    @Column({
        type: "varchar"
    })
    width: String;

    @Column({
        type: "numeric"
    })
    manufacturerId: Number;

    @Column({
        type: "numeric"
    })
    pincodeBasedDelivery: Number;

    @Column({
        type: "varchar"
    })
    productVarient: String;

    @Column({
        type: "varchar"
    })
    productVarientOption: String;

    @Column({
        type: "varchar"
    })
    productVideo: String;

    @Column({
        type: "varchar"
    })
    name: String;

    @Column({
        type: "varchar"
    })
    path: String;

    @Column({
        type: "varchar"
    })
    type: String;

}