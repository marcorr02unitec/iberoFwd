import { IsNotEmpty, IsString } from 'class-validator';

export class ClusterDto {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    @IsNotEmpty()
    @IsString()
    readonly descripcionGeneral: string;
    @IsString()
    readonly descripcionEspecifica: string;
    @IsString()
    readonly imagen: string;

}