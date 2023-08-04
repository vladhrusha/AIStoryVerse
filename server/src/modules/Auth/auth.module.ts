import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
//new

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [GoogleStrategy],
})
export class AuthModule {}
