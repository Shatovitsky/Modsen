import {Injectable} from "@angular/core";
import {User} from "../model/user.model";

@Injectable()
export class UserStorage {

  findById(id: number) {
    const users = this.findAll();

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          return users[i];
        }
      }
    }
    return null;
  }

  findAll() {
    const users = localStorage.getItem("users");

    if (users !== null) {
      return JSON.parse(users);
    }
    return null;
  }

  create(user: User) {
    let users: User[];
    users = this.findAll();

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].login == user.login) {
          return false;
        }
      }

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    } else {
      users = [user];

      localStorage.setItem("users", JSON.stringify(users));
      return true;
    }
  }

  update(user: User) {
    let check = false;
    const users = this.findAll();

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == user.id) {
          users[i] = user;
          check = true;
        }
      }

      if(check) {
        localStorage.setItem("users", JSON.stringify(users));
        return true;
      }
    }
    return false;
  }

  delete(id: number) {
    let check = false;
    const users = this.findAll();

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          users.splice(i, 1);
          check = true;
        }
      }

      if(check) {
        localStorage.setItem("users", JSON.stringify(users));
        return true;
      }
    }
    return false;
  }
}
