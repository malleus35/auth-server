import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/SignInDto';
import { UserDto } from './dto/UserDto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async signIn(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }
  async create(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }
  async findById(id: string): Promise<UserDto> {
    const user = await this.usersRepository.findOne(id);
    return toUserDto(user);
  }

  async findOne(signInDto: SignInDto): Promise<UserDto> {
    const user = await this.usersRepository.findOne({
      where: { email: signInDto.email },
    });
    return toUserDto(user);
  }

  findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }
}
