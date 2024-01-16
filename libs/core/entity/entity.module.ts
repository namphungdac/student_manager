import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenizedPostEntity } from '@app/core/entity/entities/tokenized-post.entity';
import { TransactionHistoryEntity } from '@app/core/entity/entities/transaction-history.entity';
import { PostOwnEntity } from '@app/core/entity/entities/post-own.entity';
import { TrackingFeeEntity } from '@app/core/entity/entities/tracking-fee.entity';
import { PostOwnService } from '@app/core/repositories/post-own.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TokenizedPostEntity,
      TransactionHistoryEntity,
      PostOwnEntity,
      TrackingFeeEntity,
    ]),
  ],
  providers: [PostOwnService],
  exports: [PostOwnService],
})
export class EntityModule {}
