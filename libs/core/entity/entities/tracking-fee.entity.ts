import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TrackingFeeType } from '../../types/type';

@Entity('tracking_fee')
export class TrackingFeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'tnx_hash',
    type: 'varchar',
    length: 66,
  })
  tnxHash: string;

  @Index()
  @Column({
    name: 'transaction_time',
    type: 'datetime',
    nullable: false,
  })
  transactionTime: Date;

  @Column({
    name: 'post_id',
    type: 'varchar',
    length: 255,
  })
  postId: string;

  @Column({
    name: 'destination_fee_address',
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
  destinationFeeAddress: string;

  @Column({
    name: 'destination_fee_id',
    type: 'varchar',
    length: 255,
    default: '',
  })
  destinationFeeId: string;

  @Column({
    name: 'fee_in_usd',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  feeInUsd: number;

  @Column({
    name: 'fee_in_token',
    type: 'decimal',
    precision: 18,
    scale: 8,
    default: 0,
  })
  feeInToken: number;

  @Column({
    name: 'token_pay',
    type: 'varchar',
    length: 44,
  })
  tokenPay: string;

  @Column({
    name: 'chain_id',
    type: 'int',
    default: 0,
  })
  chainId: number;

  @Column({
    type: 'varchar',
    default: 'publisher',
  })
  type: TrackingFeeType;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
