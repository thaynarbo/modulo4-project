import { Genre } from 'src/genre/entities/genre.entity';
import { Profile } from 'src/profile/entities/profile.entity';

export class Game {
  title: string;
  gameCover: string;
  description: string;
  year: number;
  imdb?: number;
  trailer: string;
  gameplayLink: string;

  genres?: Genre[];
}
