import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private selectIsAuth = (state: AppState) => state.auth.isAuthenticated;

  constructor(private router: Router, private store: Store<AppState>) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(this.selectIsAuth).pipe(
      filter((isAuth) => isAuth),
      map((isAuth) => {
        if (isAuth) {
          return true;
        }

        return this.router.createUrlTree(['auth']);
      })
    );
  }
}
