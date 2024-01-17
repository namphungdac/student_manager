import { Injectable, Logger } from '@nestjs/common';
import { StudentEntity } from '@app/core/entity/entities/student.entity';
import { StudentDBService } from '@app/core/repositories/studentDB.service';
import { StudentDto } from '@app/core/dto/student.dto';

@Injectable()
export class StudentService {
  private logger = new Logger(StudentService.name);
  constructor(private readonly studentDBService: StudentDBService) {}
  async createStudent(studentData: StudentDto): Promise<StudentEntity> {
    try {
      const newStudent = await this.studentDBService.create(studentData);
      this.logger.log(`New Student created with ID: ${newStudent.id}`);
      return newStudent;
    } catch (error) {
      this.logger.error(
        `Error in StudentService when creating Student: ${error}`,
      );
      throw error;
    }
  }
}
