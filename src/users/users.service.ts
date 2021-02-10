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

  async signIn(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

  async create(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

  async findOne(idx: string): Promise<User> {
    return await this.usersRepository.findOne(idx);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
