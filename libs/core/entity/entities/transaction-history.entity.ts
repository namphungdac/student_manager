import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionType } from '../../types/type';

@Entity('transaction_history')
export class TransactionHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'tnx_hash',
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
  tnxHash: string;

  @Index()
  @Column({
    name: 'transaction_time',
    type: 'datetime',
    nullable: false,
  })
  transactionTime: Date;

  @Column({
    name: 'block_number',
    type: 'int',
    default: 0,
  })
  blockNumber: number;

  @Column({
    name: 'transaction_type',
    type: 'varchar',
    default: 'publish',
  })
  transactionType: TransactionType;

  @Column({
    name: 'post_id',
    type: 'varchar',
    length: 255,
  })
  postId: string;

  @Column({
    name: 'chain_id',
    type: 'int',
    default: 0,
  })
  chainId: number;

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
