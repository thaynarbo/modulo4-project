import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  gameCover: string;

  @IsString()
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  imdb: number;

  @IsString()
  @IsNotEmpty()
  trailer: string;

  @IsString()
  @IsNotEmpty()
  gameplayLink: string;
}
