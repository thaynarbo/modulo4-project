import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
import { Genre } from '../entities/genre.entity';
export class CreateGenreDto extends Genre {
  @IsString({ message: `Your name can't contain numbers` })
  @IsNotEmpty({ message: `Your name can't be empty` })
  name: string;
}
