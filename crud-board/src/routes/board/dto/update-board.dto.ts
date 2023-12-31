// import { OmitType, PartialType, PickType } from '@nestjs/swagger';

// import { CreateBoardDto } from './create-board.dto';

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateBoardDto {
  @IsNotEmpty()
  @ApiProperty({ description: '내용', required: true, example: 'content' })
  content: string;
}

// 주의해야 할 점 CreateBoardDto에서 @IsNotEmpty() 데코레이터 속성도 가져오기 때문에 Optional하게 사용할 수 없음.
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

// Optional하게 사용하고 싶은 것을 pick
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {}

// Optional하게 사용하고 싶지 않은 것을 omit
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['name']) {}
