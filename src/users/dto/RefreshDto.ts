import { IsNotEmpty } from 'class-validator';
export class RefreshDto {
  @IsNotEmpty() accessToken!: string;
  @IsNotEmpty() refreshToken!: string;
}
