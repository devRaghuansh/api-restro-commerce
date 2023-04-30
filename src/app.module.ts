import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    AuthenticationModule,
    CatalogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
