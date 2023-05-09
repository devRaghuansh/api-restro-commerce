import { IsNumber, IsString } from "class-validator";


export class AccountDTO {
    @IsString()
    firstName: String;

    @IsString()
    lastName: String;

    @IsString()
    password: String;

    @IsString()
    emailId: String;

    @IsNumber()
    phoneNumber: Number;
}