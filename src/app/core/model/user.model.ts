import {Tour} from "./tour.model";
import {Role} from "./role.enum";

export interface User {
  id: number;
  login: string;
  password: string;
  role: Role;
  email: string;
  avatar: string;
  favouriteTours: Tour[];
}
