import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  username: string;

  @MinLength(4)
  @IsNotEmpty()
  password: string;

  @MinLength(4)
  @MaxLength(20)
  name: string;
}
