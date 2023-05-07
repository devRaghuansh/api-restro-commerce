import { Controller, Get } from "@nestjs/common";


@Controller('sale')
export default class ReturnSummaryController {
    @Get('return-summary')
    getReturnSummary(): String {
        return 'return summary'
    }
}