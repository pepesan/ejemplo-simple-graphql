import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UserService) {}
  /*
    Ejemplo de Consula:
    query{
      getUsers{
        userId, email
      }
    }
   */

  @Query((type) => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }
}
