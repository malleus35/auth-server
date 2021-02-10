import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInDto } from './dto/SignInDto';
import { SignUpDto } from './dto/SignUpDto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async signUp(@Body() signUpDto: SignUpDto) {
    this.usersService.create(signUpDto);
  }

  @Post()
  async signIn(@Body() signInDto: SignInDto) {
    this.usersService.signIn(signInDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
