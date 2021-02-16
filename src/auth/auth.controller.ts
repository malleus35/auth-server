import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { UserDto } from '../users/dto/UserDto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshDto } from '../users/dto/RefreshDto';
import { ResForm, resTypes } from '../shared/resTypes';
import { JwtService } from '@nestjs/jwt';
import { getDecoded } from '../shared/jwtFunction';

//TODO 응답 상황별 실패 상황 고려하기
@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async signUp(@Body() user: User): Promise<ResForm> {
    const createdUser = await this.usersService.create(user);
    if (createdUser) {
      return resTypes.successRes('Sign up');
    }
    return resTypes.failRes(
      500,
      ['Internal Server Error!'],
      'Internal Server Error',
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteUser(@Headers('authorization') bearer: string): Promise<void> {
    const decoded = getDecoded(bearer, this.jwtService);
    const result = await this.usersService.delete(decoded);
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

  @UseGuards(JwtAuthGuard)
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
