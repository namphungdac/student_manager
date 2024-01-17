import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '@app/core/entity/entities/student.entity';
import { CourseEntity } from '@app/core/entity/entities/course.entity';
import { TeacherEntity } from '@app/core/entity/entities/teacher.entity';
import { ClassEntity } from '@app/core/entity/entities/class.entity';
import { StudentClassEntity } from '@app/core/entity/entities/student-class.entity';
import { StudentDBService } from '@app/core/repositories/studentDB.service';
import { UtilsService } from '../../untils/utils.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudentEntity,
      CourseEntity,
      TeacherEntity,
      ClassEntity,
      StudentClassEntity,
    ]),
  ],
  providers: [StudentDBService, UtilsService],
  exports: [StudentDBService],
})
export class EntityModule {}
