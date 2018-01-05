import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../security/authentication/authentication.service';
import {UserService} from '../../security/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              public userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
