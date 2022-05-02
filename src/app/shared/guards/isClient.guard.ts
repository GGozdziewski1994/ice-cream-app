import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

const selectIsAuth = (state: AppState) => state.isLogged.isClient;

@Injectable({
  providedIn: 'root',
})
export class isClientGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsAuth).pipe(
      filter((isClient) => isClient),
      map((isClient) => {
        if (isClient) {
          return true;
        }

        return false;
      })
    );
  }
}
