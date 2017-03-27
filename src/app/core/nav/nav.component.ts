import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../auth/users';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'ct-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit, OnDestroy {
  private username: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
      this.userService
        .getUserState()
        .subscribe(state => this.username = state.username)
    )

  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private get isLoggedIn(): boolean {
    return this.userService.authenticated;
  }

  private logout() {
    this.userService.logout();
    this.router.navigate(['auth/login'])
  }

}
