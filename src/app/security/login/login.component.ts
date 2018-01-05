import { Component, OnInit } from '@angular/core';
import {Credentials} from '../credentials';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MessageService} from '../../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: Credentials = new Credentials();

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private messages: MessageService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userCredentials)
      .subscribe(user => {
        if (user.isAuthenticated) {
          this.userService.setCurrentUser(user);
          this.router.navigateByUrl('/books');
        } else {
          this.messages.addMessage('User: ' + user.userName + ' is not authenticated');
        }
        this.userCredentials = new Credentials();
      });
  }
}
