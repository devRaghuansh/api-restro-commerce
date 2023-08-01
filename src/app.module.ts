import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CatalogModule } from './vendor/catalog/catalog.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerSupportModule } from './customerSupport/customerSupport.module';
import { DeliveryModule } from './delivery/delivery.module';
import { EmailModule } from './email/email.module';
import { MarketingModule } from './marketing /marketing.module';
import SalesModule from './sales/sales.module';
import { SiteModule } from './site/site.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorModule } from './vendor/vendor.moule';

@Module({
  imports: [
    CustomerModule,
    AuthenticationModule,
    CatalogModule,
    
    CustomerSupportModule,
    DeliveryModule,
    EmailModule,
    MarketingModule,
    SalesModule,
    SiteModule,
    VendorModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'amitsharma',
      password: 'asdf1etewrt234',
      database: 'restro',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      //entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
