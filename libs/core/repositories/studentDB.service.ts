import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '@app/core/entity/entities/student.entity';
import { StudentDto } from '@app/core/dto/student.dto';
import { UtilsService } from '../../untils/utils.service';

@Injectable()
export class StudentDBService {
  private logger = new Logger(StudentDBService.name);
  constructor(
    @InjectRepository(StudentEntity)
    private readonly repository: Repository<StudentEntity>,
    private readonly utilsService: UtilsService,
  ) {}

  async create(student: StudentDto): Promise<StudentEntity> {
    try {
      const { name, dateOfBirth, gender, major } = student;
      const convertDateOfBirth = this.utilsService.convertTimestamp(
        dateOfBirth * 1000,
      );
      const studentData = {
        name,
        dateOfBirth: convertDateOfBirth,
        gender,
        major,
      };
      const newStudent = this.repository.create(studentData);
      return await this.repository.save(newStudent);
    } catch (error) {
      this.logger.error(
        `Error when running query to create new student: ${error}!`,
      );
      throw error;
    }
  }
}
