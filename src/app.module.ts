import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genre/genre.module';
import { ProfileModule } from './profile/profile.module';
import { GameModule } from './game/game.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GenreModule, ProfileModule, UsersModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
