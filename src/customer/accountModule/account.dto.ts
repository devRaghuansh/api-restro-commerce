import { IsNumber, IsString } from "class-validator";


export class AccountDTO {
    @IsString()
    userName: String;

    @IsString()
    email: String;

    @IsNumber()
    mobileNumber: Number;

    @IsString()
    password: String;

    @IsString()
    confirmPassword: String;

    @IsString()
    avatar: string;
}