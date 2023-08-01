import { IsNumber, IsString } from 'class-validator';

export class CategoriesDTO {
    @IsString()
    name: String;

    @IsString()
    image: String;

    @IsNumber()
    parentInt: Number;

    @IsNumber()
    sortOrder: Number;

    @IsString()
    metaTagTitle: String;

    @IsString()
    metaTagDescription: String;

    @IsString()
    metaTagKeyword: String;

    @IsNumber()
    status: Number;
}