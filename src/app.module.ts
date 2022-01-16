import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerModule } from './server/server.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ServerModule],
})
export class AppModule {}
