import { Controller, Get, Query } from '@nestjs/common';
import { SapService } from './sap.service';

@Controller('sap')
export class SapController {
  constructor(private readonly sapService: SapService) {}

  @Get('statements')
  async getStatements(
    @Query('type') type: string,
    @Query('country') country: string,
  ) {
    return await this.sapService.getStatements(type, country);
  }
}
