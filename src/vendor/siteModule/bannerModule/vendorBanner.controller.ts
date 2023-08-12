import { Controller , Get} from "@nestjs/common";


@Controller('vendor-site')
export class VendorBannerController {

@Get('banner')
getSiteBanner() {
    return 'get Site Banner'
}

}