import {User} from "../model/user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationService {

  logIn(user : User) {
    localStorage.setItem("active", JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem("active");
  }

  getActiveUser() {
    const user = localStorage.getItem("active");
    if (user !== null) {
      console.log(user)
      return JSON.parse(user);
    }
    return null;
  }
}
