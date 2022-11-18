import {Comment} from "./comment.model";

export interface Tour {
  id: number;
  title: string;
  route: string;
  cost: string;
  duration: string;
  comments: Comment[];
  photo: string[];
}
