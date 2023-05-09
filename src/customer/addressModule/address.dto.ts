import { IsNumber, IsString } from 'class-validator';

export class AddressDTO {

    @IsNumber()
    customerId: Number;

    @IsString()
    address1: String;

    @IsString()
    address2: String;

    @IsString()
    city: String;

    @IsString()
    state: String;

    @IsString()
    postcode: String;

    @IsString()
    addressType: String;
}