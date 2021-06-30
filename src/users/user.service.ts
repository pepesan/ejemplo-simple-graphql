import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  private users: User[] = [];
  constructor() {
    let user: User = new User();
    user.userId = '1';
    user.email = 'p@p.com';
    user.age = 12;
    user.isSubscribed = false;
    this.users.push(user);
    user = new User();
    user.userId = '2';
    user.email = 'p2@p.com';
    user.age = 122;
    user.isSubscribed = true;
    this.users.push(user);
  }
  public getUsers() {
    return this.users;
  }
}
