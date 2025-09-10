import { Test, TestingModule } from '@nestjs/testing';
import { NestarsBatchController } from './nestars-batch.controller';
import { NestarsBatchService } from './nestars-batch.service';

describe('NestarsBatchController', () => {
  let nestarsBatchController: NestarsBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestarsBatchController],
      providers: [NestarsBatchService],
    }).compile();

    nestarsBatchController = app.get<NestarsBatchController>(NestarsBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestarsBatchController.getHello()).toBe('Hello World!');
    });
  });
});
