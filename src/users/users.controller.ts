import { Body, Controller, Get, Post, Headers, Delete } from '@nestjs/common';
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

  @Delete()
  async deleteUser(@Headers('authorization') token: string) {
    // this.usersService.delete(token);
  }

  @Post('signin/local')
  async signInLocal(@Body() signInDto: SignInDto) {
    this.usersService.signIn(signInDto);
  }

  @Post('signin/google')
  async signInGoogle() {
    // this.usersService.signInGoogle();
  }

  @Post('signin/facebook')
  async signInFacebook() {
    // this.usersService.signInFacebook();
  }

  @Post('signin/kakao')
  async signInKakao() {
    // this.usersService.signInKakao();
  }

  @Post('signin/naver')
  async signInNaver() {
    // this.usersService.signInNaver();
  }

  @Post('logout')
  async logOut(@Headers('authorization') token: string) {
    // this.usersService.logout(token);
  }

  @Post('refresh')
  async refresh(
    @Headers('authorization') token: string,
    @Headers('refresh') refresh: string,
  ) {
    // this.usersService.refresh(token, refresh);
  }

  @Get('one')
  async findOne(@Headers('authorization') token: string) {
    // this.usersService.findOne(token);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
