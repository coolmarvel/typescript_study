import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: '이름',
    required: true,
    example: 'name',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: 'content',
  })
  content: string;
}
