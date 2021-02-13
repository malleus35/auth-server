import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from './user.entity';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  // constructor() {} // @InjectRepository(User) private usersRepository: Repository<User>,

  // async signIn(user: User): Promise<void> {
  //   await this.usersRepository.save(user);
  // }

  // async create(user: User): Promise<void> {
  //   await this.usersRepository.save(user);
  // }

  // async findOne(idx: number): Promise<User> {
  //   const test = await this.usersRepository.findOne(idx);
  //   console.log(test);
  //   return await this.usersRepository.findOne(idx);
  // }
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }
}
