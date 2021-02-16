import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './dto/UserDto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RefreshDto } from './dto/RefreshDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async signUp(@Body() user: User): Promise<void> {
    await this.usersService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteUser(@Headers('authorization') token: string): Promise<void> {
    // this.usersService.delete(token);
  }

  @Post('signin/local')
  async signInLocal(@Body() user: User): Promise<void> {
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

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refresh(
    @Headers('authorization') token: string,
    @Headers('refresh') refresh: string,
  ) {
    const refreshDto: RefreshDto = {
      accessToken: token,
      refreshToken: refresh,
    };
    this.usersService.refresh(refreshDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  async findOne(
    // @Headers('authorization') token: string,
    @Body() id: string,
  ): Promise<UserDto> {
    return this.usersService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }
}
