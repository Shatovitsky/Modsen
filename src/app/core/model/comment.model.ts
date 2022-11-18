import {User} from "./user.model";

export interface Comment {
  id: number;
  username: string;
  content: string;
  date : Date;
}
