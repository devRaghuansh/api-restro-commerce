import { Module } from "@nestjs/common";
import { CustomerSupportControl } from "./customerSupportModule/customerSupport.controller";

@Module({
    imports: [],
    controllers: [
        CustomerSupportControl
    ],
    providers: []
})
export class CustomerSupportModule {

}