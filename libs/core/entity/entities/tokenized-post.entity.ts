import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TokenizedPostPriceType, TokenizedPostStatus } from '../../types/type';

@Entity('tokenized_post')
export class TokenizedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'publish_tnx_hash',
    type: 'varchar',
    length: 66,
    unique: true,
    transformer: {
      from: (value) => {
        return String(value);
      },
      to: (value: string) => {
        return value.toLowerCase();
      },
    },
  })
  publishTnxHash: string;

  @Column({
    name: 'publisher_address',
    type: 'varchar',
    length: 44,
    transformer: {
      from: (value) => {
        return String(value);
      },
      to: (value: string) => {
        return value.toLowerCase();
      },
    },
  })
  publisherAddress: string;

  @Column({
    name: 'publisher_id',
    type: 'varchar',
    length: 255,
    // default: '',
  })
  publisherId: string;

  @Column({
    name: 'token_id',
    type: 'int',
    default: 0,
    unique: true,
  })
  tokenId: number;

  @Column({
    name: 'chain_id',
    type: 'int',
    default: 0,
  })
  chainId: number;

  @Column({
    name: 'post_id',
    type: 'varchar',
    length: 255,
  })
  postId: string;

  @Column({
    name: 'price_type',
    type: 'varchar',
    default: 'fixed',
  })
  priceType: TokenizedPostPriceType;

  @Column({
    name: 'post_price_in_usd',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  postPriceInUsd: number;

  @Index()
  @Column({
    name: 'post_publish_time',
    type: 'datetime',
    nullable: false,
  })
  postPublishTime: Date;

  @Column({
    name: 'post_supply',
    type: 'int',
    default: 0,
  })
  postSupply: number;

  @Column({
    name: 'post_status',
    type: 'varchar',
    default: 'open',
  })
  postStatus: TokenizedPostStatus;

  @Column({
    name: 'accumulate_publisher_income_usd',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  accumulatePublisherIncomeUsd: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
