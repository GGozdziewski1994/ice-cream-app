import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

const selectIsAuth = (state: AppState) => state.auth.isClient;

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsAuth).pipe(
      take(1),
      map((isAuth) => {
        if (isAuth) {
          return true;
        }

        return false;
      })
    );
  }
}
