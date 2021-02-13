import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/users/dto/SignInDto';
import { User } from 'src/users/user.entity';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const idx = 1;
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user && user.password === password) {
      //crypto module logic will be added
      const { pwd, ...result } = user;
      return result;
    }
    return null;
    // return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
