import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from '@app/core/dto/student.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { StudentEntity } from '@app/core/entity/entities/student.entity';

@Controller('v1')
@ApiTags('v1')
export class StudentController {
  private logger = new Logger(StudentController.name);
  constructor(private readonly studentService: StudentService) {}

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/student')
  @ApiResponse({
    type: StudentEntity,
    status: 200,
  })
  async createStudent(@Body() studentData: StudentDto) {
    try {
      return await this.studentService.createStudent(studentData);
    } catch (error) {
      this.logger.error(
        `Error when accessing to student service to create new student: ${error}!`,
      );
      throw error;
    }
  }
}
