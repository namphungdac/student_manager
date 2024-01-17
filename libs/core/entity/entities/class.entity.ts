import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { CourseEntity } from './course.entity';
import { TeacherEntity } from './teacher.entity';
import { StudentClassEntity } from '@app/core/entity/entities/student-class.entity';

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    name: 'start_time',
    type: 'timestamp',
    nullable: false,
  })
  startTime: Date;

  @Column({
    name: 'end_time',
    type: 'timestamp',
    nullable: false,
  })
  endTime: Date;

  @ManyToOne(() => CourseEntity, (course) => course.classes)
  course: CourseEntity;

  @ManyToOne(() => TeacherEntity, (teacherEntity) => teacherEntity.classes)
  teacher: TeacherEntity;

  @OneToMany(
    () => StudentClassEntity,
    (studentClassEntity) => studentClassEntity.class,
  )
  studentCourses: StudentClassEntity[];
}
