import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationErrors: string[] = [];

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(data: User) {
    this.auth.register(data).subscribe(user => {
      this.router.navigateByUrl('/dashboard');
    }, error => {
      console.log('error registering user', error);
    });
  }

}
