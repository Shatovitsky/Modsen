import { Component, OnInit } from '@angular/core';
import {TourService} from "../core/service/tour.service";
import {Tour} from "../core/model/tour.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-tours',
  templateUrl: './list-tours.component.html',
  styleUrls: ['./list-tours.component.scss']
})
export class ListToursComponent implements OnInit {

  tours = this.tourService.getAllTours();

  constructor(private tourService: TourService,
              private router: Router) { }

  ngOnInit(): void {
    this.tours = this.tourService.getAllTours();
  }

  goToTour(tour : Tour){
    this.router.navigate(['./']);
  }
}
