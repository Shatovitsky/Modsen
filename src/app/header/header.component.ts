import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../core/service/authorization.service";
import {UserService} from "../core/service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[
    AuthorizationService,
    UserService
  ]
})
export class HeaderComponent implements OnInit {

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
