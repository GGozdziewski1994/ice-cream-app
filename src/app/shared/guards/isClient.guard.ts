import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

@Injectable({
  providedIn: 'root',
})
export class IsClientGuard implements CanActivate {
  private selectIsClient = (state: AppState) => state.isLogged.isClient;
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(this.selectIsClient).pipe(
      filter((isClient) => isClient),
      map((isClient) => {
        if (isClient) {
          return true;
        }

        return this.router.createUrlTree(['auth']);
      })
    );
  }
}
