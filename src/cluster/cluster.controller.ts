import { Controller, Post, Get, Body, Res, HttpStatus,Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClusterService } from './services/cluster.service';
import { ClusterDto } from './dto/cluster.dto';
@Controller('cluster')
export class ClusterController {
    constructor(private readonly clusterService: ClusterService) { }

    @Post('/create')
    async saveCluster(@Res() res, @Body() clusterDto: ClusterDto): Promise<any> {
        try {
            let cluster: any = await this.clusterService.save(clusterDto);
            if (!cluster.error) {
                return res.status(HttpStatus.OK).json({
                    message: 'Cluster succesfully created',
                    cluster,
                    statusCode: 200
                })
            } else {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    message: cluster.error,
                    statusCode: 400
                })
            }
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'A ocurrido un error inesperado',
                statusCode: 400
            })
        }
    }

    @Get()
    async getCluster(@Res() res): Promise<any> {
        try {
            let cluster: Array<any> = await this.clusterService.getCluster();
            return res.status(HttpStatus.OK).json({
                message: 'success',
                data: cluster,
                statusCode: 200
            })
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'A ocurrido un error inesperado',
                statusCode: 400
            })
        }

    }

    @Put()
    async updateCluster(@Res() res, @Body() clusterObject: any): Promise<any> {
      try {
        let cluster: any = await this.clusterService.update(clusterObject);
        if (!cluster.error) {
          return res.status(HttpStatus.OK).json({
            message: 'cluster succesfully updated',
            cluster,
            statusCode: 200
          })
        } else {
          return res.status(HttpStatus.BAD_REQUEST).json({
            message: cluster.error,
            statusCode: 400
          })
        }
      } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'A ocurrido un error inesperado',
          statusCode: 400
        })
      }
    }

}