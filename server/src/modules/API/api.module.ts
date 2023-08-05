import { Module } from '@nestjs/common';
import { APIController } from './api.controller';
import { LocalSerializer } from '../Auth/auth.serializer';

@Module({
  imports: [],
  controllers: [APIController],
  providers: [LocalSerializer],
})
export class APIModule {}
