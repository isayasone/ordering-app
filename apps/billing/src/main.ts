import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmqServive = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqServive.getOptions('BILLING'))
  await app.startAllMicroservices();
}
bootstrap();
