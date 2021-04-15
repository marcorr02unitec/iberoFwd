import { CarreraModule } from './carrera/carrera.module';
import { ClusterModule } from './cluster/cluster.module';
import { ClusterController } from './cluster/cluster.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    CarreraModule,
    ClusterModule,
    MongooseModule.forRoot('mongodb://localhost:27017/iberoFWD', {
      useNewUrlParser: true
    }),

  ],
  controllers: [
  AppController],
  providers: [AppService],
})
export class AppModule { }
