import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // password precisará ser criptografado então passamos ele pelo bcrypt
  async create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };
    const createdUser = await this.prisma.user.create({ data });
    return {
      ...createdUser,
      password: undefined,
    };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };
    const updateUser = await this.prisma.user.update({ where: { id }, data });
    return {
      ...updateUser,
    };
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
