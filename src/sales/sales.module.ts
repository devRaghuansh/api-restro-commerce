import { Module } from "@nestjs/common";
import { OrderSummaryController } from "./orderSummaryModule/orderSummary.controller";
import ReturnSummaryController  from "./returnSummaryModule/returnSummary.controller";

@Module({
    imports: [],
    controllers: [
        OrderSummaryController,
        ReturnSummaryController
    ],
    providers:[]
})
export default class SalesModule{

}