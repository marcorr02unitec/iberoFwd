import { CarreraService } from './services/carrera.service';
import { CarreraController } from './carrera.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        CarreraController,],
    providers: [
        CarreraService,],
})
export class CarreraModule { }
