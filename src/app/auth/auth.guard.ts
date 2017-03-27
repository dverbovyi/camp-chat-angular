import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from "app/auth/users";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService,
        private router: Router) { }

    canActivate() {
        if (!this.userService.authenticated) {
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
    }
}
