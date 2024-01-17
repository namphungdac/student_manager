import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { GenderEnum } from '@app/core/types/type';

export class StudentDto {
  @ApiProperty({ name: 'name', type: String, required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ name: 'dateOfBirth', type: Number, required: true })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  dateOfBirth: number;

  @ApiProperty({
    name: 'gender',
    type: String,
    enum: GenderEnum,
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(GenderEnum)
  @IsString()
  gender: GenderEnum;

  @ApiProperty({ name: 'major', type: String, required: true })
  @IsNotEmpty()
  @IsString()
  major: string;
}
