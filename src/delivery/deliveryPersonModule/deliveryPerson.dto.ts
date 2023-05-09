import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";


export  class DeliveryPersonDTO {
    @IsString()
    firstName: String;

    @IsString()
    lastName: String;

    @IsNumber()
    mobileNumber: Number;
    
    @IsEmail()
    emailId: String;

    @IsString()
    password: String;

    @IsString()
    allLocation: String;

    @IsString()
    location: String;

    @IsString()
    image: String;

    @IsNumber()
    status: Number
}