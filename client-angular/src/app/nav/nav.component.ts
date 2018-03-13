import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: Boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.loggedIn$.subscribe(authenticated => (this.loggedIn = authenticated));
  }

  isAuthed(): boolean {
    return this.auth.isAuthed();
  }

  logout(): void {
    this.auth.logout().subscribe( () => this.router.navigateByUrl('/'));
  }

}
