import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  cpf: string;
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
