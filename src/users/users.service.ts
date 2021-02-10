import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/SignInDto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  signIn(signInDto: SignInDto) {
    throw new Error('Method not implemented.');
  }

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
