import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  gameCover: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  imdb: number;

  @IsString()
  @IsNotEmpty()
  trailer: string;

  @IsString()
  @IsNotEmpty()
  gameplayLink: string;

  @ValidateNested({ each: true })
  @Type(() => CreateGenreDto)
  @IsArray()
  @IsOptional()
  genres?: CreateGenreDto[];
}
