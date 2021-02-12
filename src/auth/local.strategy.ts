import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, pwd: string): Promise<User> {
    const user = await this.authService.validateUser(email, pwd);
    if (!user) {
      throw new UnauthorizedException('There is no User!');
    }
    return user;
  }
}
