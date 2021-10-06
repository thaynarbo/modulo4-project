import { Prisma } from '@prisma/client';

export class Game implements Prisma.GameUncheckedCreateInput {
  id?: number;
  title: string;
  gameCover: string;
  description: string;
  year: number;
  imdb: number;
  trailer: string;
  gameplayLink: string;
  profileId: number;
}
