import { Test, TestingModule } from '@nestjs/testing';
import { PmDbService } from './pm-db.service';

describe('PmDbService', () => {
  let service: PmDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmDbService],
    }).compile();

    service = module.get<PmDbService>(PmDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
