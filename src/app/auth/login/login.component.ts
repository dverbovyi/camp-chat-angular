import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './login.interface';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { UserService } from "../users";

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  private user: User = {
    email: '',
    password: ''
  };

  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit() {

  }

  public ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  /**
   *
   * @param form
   * form.email
   * form.password
   */
  private onSubmit(form: any) {
    console.log(form)

    const data = {
      pass: form.password,
      username: form.email
    };

    this.subscriptions.push(
      this.userService
        .login(data)
        .subscribe(this.onLoginSuccess.bind(this), this.onLoginError)
    )

  }

  private onLoginSuccess(res: any): void {
    console.log(res);
    this.userService.setUserState(res);
    this.router.navigate(['chat']);
  }

  private onLoginError(err: any): void {
    console.error(err);
    alert('User not found')
  }
}
