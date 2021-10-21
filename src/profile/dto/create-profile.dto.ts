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
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsString()
  image?: string;

  @IsNumber()
  userId: number;
}
