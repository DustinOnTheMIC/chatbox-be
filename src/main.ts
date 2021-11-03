import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  });
  app.useWebSocketAdapter(new WsAdapter(app)).enableCors({
    origin: "*"
  })
  app.use(cors({allowedHeaders:"*"}))
  await app.listen(3005);
}
bootstrap();
