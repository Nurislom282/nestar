import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarsBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
