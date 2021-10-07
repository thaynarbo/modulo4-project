import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    genres: {
      select: {
        id: false,
        name: true,
      },
    },
  };

  create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        create: dto.genres,
      },
    };
    return this.prisma.game.create({ data });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateGameDto) {
    const data: Prisma.GameUpdateInput = {
      ...dto,
      genres: {
        create: dto.genres,
      },
    };
    return this.prisma.game.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
