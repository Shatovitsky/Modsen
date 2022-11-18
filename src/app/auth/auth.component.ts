import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/service/user.service";
import {AuthorizationService} from "../core/service/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private userService : UserService,
              private authorizationService : AuthorizationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  authorization(login:string,password:string) {
    console.log(login);
    console.log(password);

    let user = this.userService.getUserByLogin(login);

    if(user !== null && user.password === password) {
      this.authorizationService.logIn(user);
    }
    this.router.navigate(['./']);
  }
}
