import { Prisma } from '@prisma/client';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Profile } from '../entities/profile.entity';
export class CreateProfileDto extends Profile {
  @IsString({ message: `Your nickname can't contain numbers` })
  @IsNotEmpty({ message: `Your nickname can't be empty` })
  nickname: string;

  @IsString({ message: `The image must be a string` })
  image: string;

  @IsObject()
  user: Prisma.UserCreateNestedOneWithoutProfilesInput;

  @IsOptional()
  games?: Prisma.GameCreateNestedManyWithoutProfileInput;
}
