import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
//new
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [GoogleStrategy],
})
export class AuthModule {}
