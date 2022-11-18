import {Component} from '@angular/core';
import {TourService} from "./core/service/tour.service";
import {UserService} from "./core/service/user.service";
import {Role} from "./core/model/role.enum";
import {UserStorage} from "./core/storage/user.storage";
import {TourStorage} from "./core/storage/tour.storage";
import {AuthorizationService} from "./core/service/authorization.service";
import {Tour} from "./core/model/tour.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    UserStorage,
    TourStorage,
    UserService,
    TourService,
    AuthorizationService
  ],
})
export class AppComponent {
  title = 'root';

  constructor(private userService: UserService,
              private tourService: TourService,
              private authorizationService : AuthorizationService) {
  }

  ngOnInit() {
    localStorage.clear();
    this.userService.addUser("guid", "1111", Role.GUID, "shastoviskey@mail.com");

    this.generateTours();
  }

  private generateTours() {
    this.tourService.addTour("«БЕЛОРУССКИЙ КАЛЕЙДОСКОП»", "Минск - Мир - Несвиж - Гродно - Августовский канал - Коробчицы - Минск ", "200$", "(5 Дней/4 Ночи)");
    this.tourService.addTour("«СОКРОВИЩА НАЦИИ»", "Сенно - Орша - Борисов - Гродно - Августовский", "2200$", "(3 Дня/2 Ночи)");
    this.tourService.addTour("«ЗНАКОМСТВО С КРАЕМ»", "route4", "3200$", "3 days/4 nights");
    this.tourService.addTour("«КАМЕННЫЙ ПОЯС БЕЛАРУСИ»", "route5", "4200$", "2 days/5 nights");
    this.tourService.addTour("«КАМЕННЫЙ СТОЛБ БЕЛАРУСИ»", "Сенно-Витебск", "1111$", "2 дня/5 ночей");
    this.tourService.addTour("БЕЛОРУССКИЙ КАЛЕЙДОСКОП", "Сенно-Минск-Москва", "11111$", "1 день/12 ночей");

    this.tourService.addComment(this.tourService.getTourById(5), "test comment1", this.userService.getUserById(0))
    this.tourService.addComment(this.tourService.getTourById(5), "test comment2", this.userService.getUserById(0))
    this.tourService.addComment(this.tourService.getTourById(5), "test comment3", this.userService.getUserById(0))
    this.tourService.addComment(this.tourService.getTourById(5), "test comment4", this.userService.getUserById(0))
  }
}

