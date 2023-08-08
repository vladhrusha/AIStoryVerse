import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { GPTModule } from './GPT/gpt.module';
import { APIModule } from './API/api.module';
import { PassportModule } from '@nestjs/passport';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    AuthModule,
    PassportModule.register({ session: true }),
    GPTModule,
    APIModule,
    UserModule,
    StoryModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
