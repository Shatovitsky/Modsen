import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../core/service/authorization.service";
import {UserService} from "../core/service/user.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  activeUser = this.authorizationService.getActiveUser();

  constructor(private authorizationService : AuthorizationService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activeUser = this.authorizationService.getActiveUser();
    console.log(this.activeUser)
  }

  ngDoCheck() {
    this.activeUser = this.authorizationService.getActiveUser();
  }

  exit() {
    console.log("logout")
    this.authorizationService.logOut();
  }

}
