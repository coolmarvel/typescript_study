import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  username: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @MinLength(8)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('KR')
  phoneNumber: string;
}
