import { Component, OnInit } from '@angular/core';
import {TourService} from "../core/service/tour.service";
import {AuthorizationService} from "../core/service/authorization.service";
import {UserService} from "../core/service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detailed-tour',
  templateUrl: './detailed-tour.component.html',
  styleUrls: ['./detailed-tour.component.scss']
})
export class DetailedTourComponent implements OnInit {

  tour = this.tourService.getActiveTour();
  comments = this.tourService.getActiveTour() === null ? null : this.tourService.getActiveTour().comments;

  constructor(private tourService: TourService,
              private userService: UserService,
              private router: Router,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {

    this.tour = this.tourService.getActiveTour();
    this.comments = this.tourService.getActiveTour() === null ? null : this.tourService.getActiveTour().comments;
  }

  ngDoCheck() {
    this.comments = this.tourService.getActiveTour() === null ? null : this.tourService.getActiveTour().comments;
  }


  send(comment : string) {
    if(comment !== null && comment !== "") {
      this.tourService.addComment(this.tourService.getActiveTour(), comment, this.authorizationService.getActiveUser());
    }
  }

}
