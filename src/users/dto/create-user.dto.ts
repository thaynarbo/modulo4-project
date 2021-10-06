import { Prisma } from '@prisma/client';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  Matches,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString({ message: `Your name can't contain numbers` })
  @IsNotEmpty({ message: `Your name can't be empty` })
  name: string;

  @IsString({ message: `Your surname can't contain numbers` })
  @IsNotEmpty({ message: `Your surname can't be empty` })
  surname: string;

  @IsEmail(undefined, { message: 'Please write a valid email' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {
      message: 'your password is too weak',
    },
  )
  password: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;
}
