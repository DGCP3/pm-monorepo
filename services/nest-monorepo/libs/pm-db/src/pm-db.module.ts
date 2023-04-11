import { Global, Module } from '@nestjs/common';
import { PmDbService } from './pm-db.service';

@Global()
@Module({
  providers: [PmDbService],
  exports: [PmDbService],
})
export class PmDbModule {}
