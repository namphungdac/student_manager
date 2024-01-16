import { Injectable, Logger } from '@nestjs/common';
import { PostOwnService } from '@app/core/repositories/post-own.service';
import { PostOwnEntity } from '@app/core/entity/entities/post-own.entity';

@Injectable()
export class DashboardService {
  private logger = new Logger(DashboardService.name);
  constructor(private readonly postOwnService: PostOwnService) {}
  async createPostOwn(postOwnData: PostOwnEntity): Promise<PostOwnEntity> {
    try {
      const newPostOwn = await this.postOwnService.create(postOwnData);
      this.logger.log(`New PostOwn created with ID: ${newPostOwn.id}`);
      return newPostOwn;
    } catch (error) {
      this.logger.error(
        `Error in DashboardService when creating PostOwn: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }
}
