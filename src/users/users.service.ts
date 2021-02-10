import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/SignInDto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  signIn(user: User) {
    this.usersRepository.create(user);
  }

  create(user: User) {
    this.usersRepository.create(user);
  }

  findOne(idx: string): Promise<User> {
    return this.usersRepository.findOne(idx);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
