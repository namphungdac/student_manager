import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { EntityModule } from '@app/core/entity/entity.module';

@Module({
  imports: [EntityModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
