import { JwtService } from '@nestjs/jwt';

export const getDecoded = (bearer: string, jwtService: JwtService) => {
  const token: string = bearer.split(' ')[1];
  const decoded = jwtService.decode(token);
  return decoded;
};
