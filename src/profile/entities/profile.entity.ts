import { Prisma } from '@prisma/client';
export class Profile implements Prisma.ProfileUncheckedCreateInput {
  id?: number;
  nickname: string;
  image?: string;
  userId: number;
}
