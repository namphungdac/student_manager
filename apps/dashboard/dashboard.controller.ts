import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { PostOwnEntity } from '@app/core/entity/entities/post-own.entity';
import { Response } from 'express';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post('/post-own')
  async createPostOwn(
    @Body() postOwnData: PostOwnEntity,
    @Res() res: Response,
  ) {
    try {
      const newPostOwn = await this.dashboardService.createPostOwn(postOwnData);
      return res.status(HttpStatus.CREATED).json({
        status: 200,
        message: 'PostOwn successfully created',
        data: newPostOwn,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 500,
        message: error.message,
      });
    }
  }
}
