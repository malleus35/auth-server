import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/users/dto/SignInDto';
import { UserDto } from '../users/dto/UserDto';
import { User } from 'src/users/user.entity';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(signInDto: SignInDto): Promise<UserDto> {
    const user = await this.usersService.findByLogin(signInDto);
    if (user) {
      return user;
    }
    return null;
  }

  async login(userInfo: SignInDto) {
    const user = await this.usersService.findByLogin(userInfo);
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
