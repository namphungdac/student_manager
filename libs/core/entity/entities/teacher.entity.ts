import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClassEntity } from './class.entity';
import { Department } from '@app/core/types/type';

@Entity()
export class TeacherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  department: Department;

  @OneToMany(() => ClassEntity, (classEntity) => classEntity.teacher)
  classes: ClassEntity[];
}
