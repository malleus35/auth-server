import { UserDto } from 'src/users/dto/UserDto';
import { User } from 'src/users/user.entity';

export const toUserDto = (data: User): UserDto => {
  const { id, email, name } = data;
  let userDto: UserDto = { id, email, name };
  return userDto;
};
