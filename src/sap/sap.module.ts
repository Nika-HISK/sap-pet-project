import { Module } from '@nestjs/common';
import { SapService } from './sap.service';
import { SapController } from './sap.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SapController],
  providers: [SapService],
})
export class SapModule {}
