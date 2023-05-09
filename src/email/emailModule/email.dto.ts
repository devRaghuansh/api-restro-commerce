import { IsString } from "class-validator";


export class EmailController {

    @IsString()
    title: String;

    @IsString()
    subject: String;

    @IsString()
    content: String;

    @IsString()
    status: String;
}