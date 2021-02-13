import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
import { SignInDto } from 'src/users/dto/SignInDto';
import { UserDto } from 'src/users/dto/UserDto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(signInDto: SignInDto): Promise<UserDto> {
    const user = await this.authService.validateUser(signInDto);
    if (!user) {
      throw new UnauthorizedException('There is no User!');
    }
    return user;
  }
}
