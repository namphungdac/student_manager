import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostOwnStatus } from '../../types/type';

@Entity('post_own')
export class PostOwnEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'buy_tnx_hash',
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
  buyTnxHash: string;

  @Column({
    name: 'post_id',
    type: 'varchar',
    length: 255,
  })
  postId: string;

  @Index()
  @Column({
    name: 'transaction_time',
    type: 'datetime',
    nullable: false,
  })
  transactionTime: Date;

  @Column({
    name: 'chain_id',
    type: 'int',
    default: 0,
  })
  chainId: number;

  @Column({
    name: 'trader_address',
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
  traderAddress: string;

  @Column({
    name: 'trader_id',
    type: 'varchar',
    length: 255,
    default: '',
  })
  traderId: string;

  @Column({
    type: 'varchar',
    default: 'owned',
  })
  status: PostOwnStatus;

  @Column({
    name: 'token_pay',
    type: 'varchar',
    length: 44,
  })
  tokenPay: string;

  @Column({
    name: 'value_token',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  valueToken: number;

  @Column({
    name: 'value_in_usd',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  valueInUsd: number;

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
