import {Injectable, NgModule} from "@angular/core";
import {TourStorage} from "../storage/tour.storage";
import {Tour} from "../model/tour.model";
import {User} from "../model/user.model";
import {Comment} from "../model/comment.model";

@Injectable()
@NgModule({
  providers: [
    TourStorage,
  ]
})
export class TourService {

  constructor(private tourStorage: TourStorage) {
  }

  getTourById(id: number): Tour {
    return this.tourStorage.findById(id);
  }

  getAllTours(): Tour[] {
    return this.tourStorage.findAll();
  }

  addTour(title : string, route : string, cost : string, duration : string): boolean {
    let tour: Tour = {
      id: this.getAllTours() === null ? 0 : this.getAllTours().length,
      title: title,
      route: route,
      cost: cost,
      duration: duration,
      comments: [],
      photo: []
    };

    return this.tourStorage.create(tour);
  }

  changeTitle(tour : Tour, title : string) {
    if (this.titleIsFree(tour.id, title)) {
      tour.title = title;
      return this.tourStorage.update(tour);
    }
    console.log(`title ${tour.title} already exist`);
    return false;
  }

  changeCost(tour : Tour, cost : string) {
    tour.cost = cost;
    return this.tourStorage.update(tour);
  }

  changeRoute(tour : Tour, route : string) {
    tour.route = route;
    return this.tourStorage.update(tour);
  }

  changeDuration(tour : Tour, duration : string) {
    tour.duration = duration;
    return this.tourStorage.update(tour);
  }

  addPhoto(tour : Tour, photo : string[]) {
    tour.photo = photo;
    return this.tourStorage.update(tour);
  }

  addComment(tour : Tour, content : string, sender : User) {
    console.log("start addComment")
    let comments : Comment[] = tour.comments;

    let comment : Comment = {
      id: comments === null || comments.length == 0 ? 0 : comments.length,
      content: content,
      username: sender.login,
      date: new Date()
    };

    if (comments === null) {
      tour.comments = [comment];
    } else {
      tour.comments.push(comment);
    }

    return this.tourStorage.update(tour);
  }

  deleteComment(tour : Tour, commentId : number) {
    if(commentId < tour.comments.length) {
      tour.comments.splice(commentId, 1);
      return this.tourStorage.update(tour);
    }
    console.log(`Illegal commentId argument: ${commentId}`);
    return false;
  }

  deleteTour(id : number) {
    return this.tourStorage.delete(id);
  }

  addActiveTour(tour : Tour) {
    localStorage.setItem("active_tour", JSON.stringify(tour));
  }

  getActiveTour() {
    const tour = localStorage.getItem("active_tour");
    if (tour !== null) {
      console.log(tour)
      return JSON.parse(tour);
    }
    return null;
  }

  private titleIsFree(id : number, title : string) {
    const tours = this.getAllTours();
    let titles: string[] = [];

    if (tours !== null) {
      for (let i = 0; i < tours.length; i++) {
        if (tours[i].id != id) {
          titles.push(tours[i].title);
        }
      }
    }

    return !titles.includes(title);
  }

}
