import { Controller, Get } from '@nestjs/common';
import { BatchService } from './batch.service';

@Controller()
export class BatchController {
  constructor(private readonly nestarsBatchService: BatchService) { }

  @Get()
  getHello(): string {
    return this.nestarsBatchService.getHello();
  }
}
