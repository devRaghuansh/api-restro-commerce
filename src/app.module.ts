import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CatalogModule } from './catalog/catalog.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerSupportModule } from './customerSupport/customerSupport.module';
import { DeliveryModule } from './delivery/delivery.module';
import { EmailModule } from './email/email.module';
import { MarketingModule } from './marketing /marketing.module';
import SalesModule from './sales/sales.module';
import { SiteModule } from './site/site.module';

@Module({
  imports: [
    AuthenticationModule,
    CatalogModule,
    CustomerModule,
    CustomerSupportModule,
    DeliveryModule,
    EmailModule,
    MarketingModule,
    SalesModule,
    SiteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
