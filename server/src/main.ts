import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import mongoose from 'mongoose';
import devKeys from './config/dev';
import * as cookieParser from 'cookie-parser';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require('passport');
import * as cookieSession from 'cookie-session';
mongoose.connect(devKeys.mongoURI);
import logger from '../tools/logger';
const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(
    cookieSession({
      maxAge: 1 * 60 * 60 * 1000, //1 hours
      keys: [devKeys.cookieKey], //selects random key from array
    }),
  );
  await app.use(passport.initialize());
  await app.use(passport.session());
  await app.listen(PORT);

  if (!(process.env.NODE_ENV === 'production')) {
    logger.info(`app is running on port ${PORT}`);
  }
}
bootstrap();
