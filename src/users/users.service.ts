import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findByLogin({ email, pwd }: SignInDto): Promise<UserDto> {
    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    // const areEqual = await comparePasswords(user.pwd, pwd);
    const areEqual = user.pwd === pwd;

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }
}
