import { IsNumber, IsString } from "class-validator";


export class PageDTO {

    @IsString()
    title: String; 

    @IsString()
    content: String; 

    @IsString()
    metaTagTitle: String;

    @IsString()
    pageGroupId: String;

    @IsString()
    metaTagContent: String; 

    @IsString()
    metaTagKeyword: String;

    @IsString()
    pageSlug: String; 

    @IsNumber()
    active: Number;

}