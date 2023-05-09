import { Controller, Get } from "@nestjs/common";


@Controller('catalog')
export class ProductReviewController {
    @Get('product-review')
    getProductReview() {
        return 'product review'
    }

    
}