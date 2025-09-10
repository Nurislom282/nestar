import { Module } from '@nestjs/common';
import { NestarsBatchController } from './nestars-batch.controller';
import { NestarsBatchService } from './nestars-batch.service';

@Module({
  imports: [],
  controllers: [NestarsBatchController],
  providers: [NestarsBatchService],
})
export class NestarsBatchModule {}
