import { ClusterService } from './services/cluster.service';
import { Module } from '@nestjs/common';
import { ClusterController } from './cluster.controller';
import { Cluster, ClusterSchema } from './schema/cluster.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Cluster.name, schema: ClusterSchema }]),
    ],
    controllers: [

        ClusterController,
    ],
    providers: [
        ClusterService,],
})
export class ClusterModule { }
