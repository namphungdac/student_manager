import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClassEntity } from '@app/core/entity/entities/class.entity';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  name: string;

  @Column({
    type: 'integer',
  })
  credits: number;

  @OneToMany(() => ClassEntity, (classEntity) => classEntity.course)
  classes: ClassEntity[];
}
