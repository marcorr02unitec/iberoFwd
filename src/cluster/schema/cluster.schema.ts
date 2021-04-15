import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ClusterDocument = Cluster & Document;
const ObjectId = require('mongodb').ObjectId;
@Schema()
export class Cluster {
    @Prop({ type: ObjectId })
    userId: string;
    @Prop({ required: true })
    nombre: string;
    @Prop({ required: false })
    descripcionGeneral: string;
    @Prop({ required: false })
    descripcionEspecifica: string;
    @Prop({ required: false })
    imagen: string;
    @Prop({ default: 'true'})
    estatus: string;
    @Prop({default:Date.now })
    createdAt:Date;
    
    
}

export const ClusterSchema = SchemaFactory.createForClass(Cluster);