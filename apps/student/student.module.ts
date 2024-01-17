import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { EntityModule } from '@app/core/entity/entity.module';

@Module({
  imports: [EntityModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
