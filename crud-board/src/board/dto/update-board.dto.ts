import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(20)
  name?: string;

  @IsOptional()
  content?: string;
}
