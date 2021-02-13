import { IsNotEmpty, IsEmail } from 'class-validator';
export class SignUpDto {
  @IsNotEmpty() @IsEmail() email!: string;
  @IsNotEmpty() pwd!: string;
  @IsNotEmpty() name!: string;
}
