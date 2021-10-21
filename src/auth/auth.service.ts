import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './model/LoginDTO';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToken';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async login(dto: LoginDto): Promise<UserToken> {
    const user: User = await this.validateUser(dto.email, dto.password);
    const payload: UserPayload = {
      sub: user.id,
      username: user.email,
    };

    return { accessToken: this.jwtService.sign(payload), userID: user.id };
  }
  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.usersService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('User and/or password is not valid');
  }
}
