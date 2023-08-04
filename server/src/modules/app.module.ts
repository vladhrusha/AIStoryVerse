import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { GPTModule } from './GPT/gpt.module';
import { APIModule } from './API/api.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    PassportModule.register({ session: true }),
    GPTModule,
    APIModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
