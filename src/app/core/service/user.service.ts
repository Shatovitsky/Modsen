import {Component, Injectable, NgModule} from "@angular/core";
import {User} from "../model/user.model";
import {UserStorage} from "../storage/user.storage";
import {Tour} from "../model/tour.model";
import {Role} from "../model/role.enum";

@Injectable()
@NgModule({
  providers: [
    UserStorage
  ]
})
export class UserService {

  constructor(private userStorage: UserStorage) {
  }

  getUserById(id: number): User {
    return this.userStorage.findById(id);
  }

  getAllUsers(): User[] {
    return this.userStorage.findAll();
  }

  getUserByLogin(login : string) {
    let users = this.getAllUsers();

    if(users !== null) {
      for(let i = 0; i < users.length; i++) {
        if(users[i].login == login) {
          return users[i];
        }
      }
    }
    return null;
  }

  addUser(login: string, password: string, role: Role, email: string): boolean {
    let user: User = {
      id: this.getAllUsers() === null ? 0 : this.getAllUsers().length,
      login: login,
      password: password,
      role: role,
      email: email,
      avatar: "",
      favouriteTours: []
    };

    if (this.loginIsFree(user.id, user.login)) {
      return this.userStorage.create(user);
    }

    console.log(`login ${user.login}, id ${user.id} already exist`);
    return false;
  }

  changeLogin(user: User, login: string) {
    if (this.loginIsFree(user.id, login)) {
      user.login = login;
      return this.userStorage.update(user);
    }
    console.log(`login ${user.login} already exist`);
    return false;
  }

  changePassword(user: User, password: string) {
    user.password = password;
    return this.userStorage.update(user);
  }

  changeEmail(user: User, email: string) {
    user.email = email;
    return this.userStorage.update(user);
  }

  changeAvatar(user: User, avatar: string) {
    user.avatar = avatar;
    return this.userStorage.update(user);
  }

  addFavouriteTours(user: User, tour: Tour) {
    let tours = user.favouriteTours;

    if (tours === null || tours.length == 0) {
      user.favouriteTours = [tour];
    } else {
      user.favouriteTours.includes(tour) ?
        console.log(`tour ${tour} already added to the favourites`) :
        user.favouriteTours.push(tour);
    }

    return this.userStorage.update(user);
  }

  deleteUser(id : number) {
    return this.userStorage.delete(id);
  }

  private loginIsFree(id: number, login: string) {
    const users = this.getAllUsers();
    let logins: string[] = [];

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id != id) {
          logins.push(users[i].login);
        }
      }
    }

    return !logins.includes(login);
  }
}
