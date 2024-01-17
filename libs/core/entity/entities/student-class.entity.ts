import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { StudentEntity } from './student.entity';
import { ClassEntity } from './class.entity';

@Entity()
export class StudentClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => StudentEntity,
    (studentEntity) => studentEntity.studentClasses,
  )
  student: StudentEntity;

  @ManyToOne(() => ClassEntity, (classEntity) => classEntity.studentCourses)
  class: ClassEntity;

  @Column({ nullable: true })
  grade: number;
}
