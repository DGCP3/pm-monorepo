import { Injectable } from '@nestjs/common';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class BcryptService {
  compareInput(input: string, hash: string) {
    return compareSync(input, hash);
  }

  hashInput(input: string) {
    return hashSync(input, genSaltSync(10));
  }
}
