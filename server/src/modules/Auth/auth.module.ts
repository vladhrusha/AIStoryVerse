import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
import { LocalSerializer } from './auth.serializer';
import { AuthService } from './auth.service';
//new

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [GoogleStrategy, LocalSerializer],
})
export class AuthModule {}
