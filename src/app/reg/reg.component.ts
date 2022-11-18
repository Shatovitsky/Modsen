import {Component, OnInit} from '@angular/core';
import {UserService} from "../core/service/user.service";
import {Role} from "../core/model/role.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {

  }

  registration(login:string, email: string, password:string,check_pass:string) {
    console.log(login);
    console.log(email)
    console.log(password);
    console.log(check_pass);

    if(password === check_pass) {
      this.userService.addUser(login, password, Role.TENANT, email)
    }

    this.router.navigate(['./Auth']);
  }
}
