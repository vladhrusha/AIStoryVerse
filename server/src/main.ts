import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import mongoose from 'mongoose';
import devKeys from './config/dev';
mongoose.connect(devKeys.mongoURI);
const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  if (!(process.env.NODE_ENV === 'production')) {
    console.log(`app is running on port ${PORT}`);
  }
}
bootstrap();
