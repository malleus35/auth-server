import { Body, Controller, Get, Post, Headers, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async signUp(@Body() user: User) {
    await this.usersService.create(user);
  }

  @Delete()
  async deleteUser(@Headers('authorization') token: string) {
    // this.usersService.delete(token);
  }

  @Post('signin/local')
  async signInLocal(@Body() user: User) {
    await this.usersService.signIn(user);
  }

  @Post('signin/google')
  async signInGoogle() {
    // this.usersService.signInGoogle();
  }

  @Post('signin/github')
  async signInGithub() {
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
  async findOne(
    @Headers('authorization') token: string,
    @Body() id: string,
  ): Promise<User> {
    return this.usersService.findById(id);
  }

  @Get('all')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
