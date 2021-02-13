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

  async validateUser(signInDto: SignInDto): Promise<User> {
    const user = await this.usersService.findOne(signInDto);
    console.log(user);
    if (user) {
      //&& user.pwd === signInDto.pwd
      //crypto module logic will be added
      // const { pwd, ...result } = user;
      return user;
    }
    return null;
    // return user;
  }

  async login(userInfo: SignInDto) {
    const user = await this.usersService.findOne(userInfo);
    const payload = { idx: user.idx };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
