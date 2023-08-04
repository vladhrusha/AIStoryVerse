import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import mongoose from 'mongoose';
import devKeys from './config/dev';
import * as cookieParser from 'cookie-parser';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require('passport');
import * as cookieSession from 'cookie-session';
mongoose.connect(devKeys.mongoURI);

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(
    cookieSession({
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
      keys: [devKeys.cookieKey], //selects random key from array
    }),
  );
  await app.use(passport.initialize());
  await app.use(passport.session());
  await app.listen(PORT);

  if (!(process.env.NODE_ENV === 'production')) {
    console.log(`app is running on port2 ${PORT}`);
  }
}
bootstrap();
