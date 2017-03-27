import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { API_CONFIG } from '../../shared/api.config';

@Injectable()
export class UserService {
  private _authenticated: boolean = false;
  private _state: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: Http){}

  public setUserState(state: any): void {
    this._authenticated = true;
    this._state.next(state);
  }

  public getUserState(): BehaviorSubject<any> {
    return this._state;
  }

  public get authenticated(): boolean {
    return this._authenticated;
  }

  public login(user: any): Observable<any> {
    return this.http.post(API_CONFIG.LOGIN, user).map(res => res.json());
  }

  public logout(): void {
    this._authenticated = false;
    this._state.next({});
    console.log('user logged out');
  }
}
