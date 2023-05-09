import { IsNumber, IsString } from "class-validator";


export class OrderDetailDTO {
    @IsNumber()
    orderProductId: Number
}

export class OrderListDTO {
    @IsNumber()
    limit: Number;

    @IsNumber()
    offset: Number;

    @IsString()
    keyword: String;

    @IsString()
    status: String;

    @IsNumber()
    count: Number;
}