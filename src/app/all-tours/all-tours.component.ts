import { Component, OnInit } from '@angular/core';
import {TourService} from "../core/service/tour.service";
import {Tour} from "../core/model/tour.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-tours',
  templateUrl: './all-tours.component.html',
  styleUrls: ['./all-tours.component.scss']
})
export class AllToursComponent implements OnInit {

  tours = this.tourService.getAllTours();

  constructor(private tourService: TourService,
              private router: Router) { }

  ngOnInit(): void {
    this.tours = this.tourService.getAllTours();
  }

  toTour(tour : Tour) {
    this.tourService.addActiveTour(tour);
    this.router.navigate(['./Detailed-Tour']);
  }
}
