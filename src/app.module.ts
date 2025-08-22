import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SapModule } from './sap/sap.module';

@Module({
  imports: [SapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
