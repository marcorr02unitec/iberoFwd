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
        /*  try {
            console.log('user', user)
            const salt = await genSalt(10);
            let password: any = await hash(user.password, salt);
            user.password = password;
            const createdUser = new this.userModel(user);
            let userSaved = await createdUser.save();
            let statistic: Istatistic = {
              type: eTypeStatistics.registro,
              userId: userSaved._id
            }
      
            await this.statisticService.save(userSaved._id, statistic);
            return userSaved;
          } catch (error) {
            console.log('errr', error)
            let message = error._message ?? error.toString()
            return { error: message }
          */ }

    async getCluster(): Promise<ClusterDocument[]> {
        try {
            const cluster: Array<any> = await this.clusterModel.find();
            return cluster;
        }
        catch (error) {
            throw new Error("Internal server error");
        }
    }

    async update(statisticObject: any): Promise<any> {
        /*try {
            let statistic: any = await this.statisticModel.findOne({ "_id": ObjectId(statisticObject.statisticId) });
            let fecha1: Date = moment(statistic.createdAt);
            if (statistic) {
                statistic.finishedAt = Date.now();
                let fecha2: any = moment(statistic.finishedAt);
                statistic.minutes = fecha2.diff(fecha1, 'minutes');
                return await this.statisticModel.findOneAndUpdate({ "_id": statisticObject.statisticId }, {
                    finishedAt: statistic.finishedAt,
                    minutes: statistic.minutes
                });
            } else {
                return { error: 'Resource not found' };
            }
        } catch (error) {
            let message = error._message ?? error.toString()
            return { error: message }
        }*/
    }

}






