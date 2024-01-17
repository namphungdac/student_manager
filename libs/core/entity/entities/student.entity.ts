import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../../types/type';
import { StudentClassEntity } from '@app/core/entity/entities/student-class.entity';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    name: 'date_of_birth',
    type: 'timestamp',
  })
  dateOfBirth: Date;

  @Column({
    type: 'varchar',
  })
  gender: Gender;

  @Column({
    type: 'varchar',
    length: 50,
  })
  major: string;

  @OneToMany(
    () => StudentClassEntity,
    (studentClassEntity) => studentClassEntity.student,
  )
  studentClasses: StudentClassEntity[];
}
