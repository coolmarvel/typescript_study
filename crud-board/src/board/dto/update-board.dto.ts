import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(20)
  name?: string;

  @IsOptional()
  content?: string;
}

// 주의해야 할 점 CreateBoardDto에서 @IsNotEmpty() 데코레이터 속성도 가져오기 때문에 Optional하게 사용할 수 없음.
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

// Optional하게 사용하고 싶은 것을 pick
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {}

// Optional하게 사용하고 싶지 않은 것을 omit
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {}
