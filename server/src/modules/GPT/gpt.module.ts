import { Module } from '@nestjs/common';
import { GPTService } from './gpt.service';
import { GPTController } from './gpt.controller';

@Module({
  providers: [GPTService],
  controllers: [GPTController],
  exports: [GPTService],
})
export class GPTModule {}
