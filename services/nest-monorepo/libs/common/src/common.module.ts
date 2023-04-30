import { Global, Module } from '@nestjs/common';
import { BcryptService } from './bcrypt.service';
import { DbService } from './database.service';

@Global()
@Module({
  providers: [BcryptService, DbService],
  exports: [BcryptService, DbService],
})
export class CommonModule {}
