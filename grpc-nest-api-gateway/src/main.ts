import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3000)
    .then(() => {
      console.log('Server is running on PORT 3000');
    })
    .catch((err) => {
      console.log(`Error is starting server ${err}`);
    });
}
bootstrap();
