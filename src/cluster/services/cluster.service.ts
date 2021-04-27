import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cluster, ClusterDocument } from '../schema/cluster.schema';
import { Icluster } from '../interfaces/cluster.interface';
const ObjectId = require('mongodb').ObjectId;
let moment = require('moment');
@Injectable()
export class ClusterService {
    constructor(
        @InjectModel(Cluster.name) private clusterModel: Model<ClusterDocument>,
    ) { }


    async save(Cluster: Icluster) {
        try {
            const createdUser = new this.clusterModel(Cluster);
            let userSaved = await createdUser.save();
            return userSaved;
        } catch (error) {
            console.log('errr', error)
            let message = error._message ?? error.toString()
            return { error: message }
        }
    }

    async getCluster(): Promise<ClusterDocument[]> {
        try {
            const cluster: Array<any> = await this.clusterModel.find();
            return cluster;
        }
        catch (error) {
            throw new Error("Internal server error");
        }
    }

    async updateCluster(statisticObject: any, clus: any): Promise<any> {
        try {
            let cluster: any = await this.clusterModel.findOne({ "nombre": clus });
            if (cluster) {

                await this.clusterModel.findOneAndUpdate({ "nombre": clus }, {
                    nombre: statisticObject.nombre,
                    descripcionGeneral: statisticObject.descripcionGeneral,
                    descripcionEspecifica: statisticObject.descripcionEspecifica,
                    imagen: statisticObject.imagen
                });
                cluster = await this.clusterModel.findOne({ "nombre": clus });
                return cluster;
            } else {
                return { error: 'Este Cluster no existe' };
            }
        } catch (error) {
            let message = error._message ?? error.toString()
            return { error: message }
        }
    }

    async deleteCluster(clus: any): Promise<any> {
        try {
            let cluster: any = await this.clusterModel.findOne({ "nombre": clus });
            if (cluster) {
                await this.clusterModel.deleteOne({"nombre": clus});
                return "cluster eliminado";
            } else {
                return { error: 'Este Cluster no existe' };
            }
        } catch (error) {
            let message = error._message ?? error.toString()
            return { error: message }
        }
    }

}






