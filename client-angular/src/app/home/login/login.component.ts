import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  user: User = new User();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.auth.login(user).subscribe( loggedUser => console.log('logged in user'),
    error => {
      this.handleErrors(error.json());
    });
  }

  private handleErrors(errors: string[] | string): void {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }

}
