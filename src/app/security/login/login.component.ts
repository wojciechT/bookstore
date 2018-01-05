import {Component, OnInit} from '@angular/core';
import {Credentials} from '../credentials';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {MessageService} from '../../message/message.service';
import {User} from '../authentication/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials = new Credentials();

  constructor(private authService: AuthenticationService,
              private router: Router,
              private messages: MessageService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userCredentials).subscribe(user => {
      this.userCredentials = new Credentials();
      if (user.isAuthenticated) {
        this.router.navigateByUrl('/books');
      } else {
        this.messages.addMessage('User: ' + user.userName + ' is not authenticated');
      }
    });
  }
}
