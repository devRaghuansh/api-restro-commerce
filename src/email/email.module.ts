import { Module } from "@nestjs/common";
import { EmailController } from "./emailModule/email.controller";

@Module({
    imports:[],
    controllers: [
        EmailController
    ],
    providers: []
})

export class EmailModule {

}