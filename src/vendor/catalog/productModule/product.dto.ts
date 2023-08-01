import { IsNumber, IsString } from 'class-validator';

export class ProductDTO {

    @IsString()
    productName: String;

    @IsString()
    productDescription: String;

    @IsString()
    sku: String;

    @IsString()
    upc: String;

    @IsString()
    hsn: String;

    @IsString()
    image: String;
    
    @IsString()
    productSlug: String;

    @IsNumber()
    quantity: Number;

    @IsString()
    metaTagTitle: String;

    @IsString()
    metaTagDescription: String;

    @IsString()
    metaTagKeyword: String;

    @IsNumber()
    packingCost: Number;

    @IsNumber()
    shippingCost: Number;

    @IsNumber()
    tax: Number;

    @IsNumber()
    taxType: Number;

    @IsNumber()
    others: Number;

    @IsNumber()
    categoryId: Number;

    @IsString()
    relatedProductId: String;

    @IsNumber()
    price: Number;

    @IsNumber()
    outOfStockStatus: Number;

    @IsNumber()
    requiredShipping: Number;

    @IsString()
    dateAvailable: String;

    @IsNumber()
    status: Number;

    @IsString()
    sortOrder: String;

    @IsNumber()
    quotationAvailable: Number;

    @IsNumber()
    hasTirePrice: Number;

    @IsString()
    productSpecial: String;

    @IsString()
    productDiscount: String;

    @IsString()
    tirePrices: String;

    @IsString()
    productAttribute: String;
    
    @IsString()
    height: String;

    @IsString()
    weight: String;

    @IsString()
    length: String;

    @IsString()
    width: String;

    @IsNumber()
    manufacturerId: Number;

    @IsNumber()
    pincodeBasedDelivery: Number;

    @IsString()
    productVarient: String;

    @IsString()
    productVarientOption: String;

    @IsString()
    productVideo: String;

    @IsString()
    name: String;

    @IsString()
    path: String;

    @IsString()
    type: String;
}