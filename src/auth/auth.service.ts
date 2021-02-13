import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const idx = 1;
    const user = await this.usersService.findOne(idx);
    console.log(user);
    if (user && user.pwd === password) {
      //crypto module logic will be added
      const { pwd, ...result } = user;
      return user;
    }
    return null;
  }
}
