import {Tour} from "../model/tour.model";
import {Injectable} from "@angular/core";

@Injectable()
export class TourStorage {

  findById(id: number) {
    const tours = this.findAll();

    if (tours !== null) {
      for (let i = 0; i < tours.length; i++) {
        if (tours[i].id == id) {
          return tours[i];
        }
      }
    }
    return null;
  }

  findAll() {
    const tours = localStorage.getItem("tours");

    if (tours !== null) {
      return JSON.parse(tours);
    }
    return null;
  }

  create(tour: Tour) {
    let tours: Tour[];
    tours = this.findAll();

    if (tours !== null) {
      for (let i = 0; i < tours.length; i++) {
        if (tours[i].title == tour.title) {
          console.log(`title ${tour.title} already exist`);
          return false;
        }
      }

      tours.push(tour);
      localStorage.setItem("tours", JSON.stringify(tours));
      return true;
    } else {
      tours = [tour];
      localStorage.setItem("tours", JSON.stringify(tours));
      return true;
    }
  }

  update(tour: Tour) {
    let check = false;
    const tours = this.findAll();

    if (tours !== null) {
      for (let i = 0; i < tours.length; i++) {
        if (tours[i].id == tour.id) {
          tours[i] = tour;
          check = true;
        }
      }

      if(check) {
        localStorage.setItem("tours", JSON.stringify(tours));
        return true;
      }
    }
    return false;
  }

  delete(id: number) {
    let check = false;
    const tours = this.findAll();

    if (tours !== null) {
      for (let i = 0; i < tours.length; i++) {
        if (tours[i].id == id) {
          tours.splice(i, 1);
          check = true;
        }
      }

      if(check) {
        localStorage.setItem("tours", JSON.stringify(tours));
        return true;
      }
    }
    return false;
  }
}
