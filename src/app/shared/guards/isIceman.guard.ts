import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

const selectIsAuth = (state: AppState) => state.isLogged.isIceman;

@Injectable({
  providedIn: 'root',
})
export class isIcemanGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsAuth).pipe(
      filter((isIceman) => isIceman),
      map((isIceman) => {
        if (isIceman) {
          return true;
        }

        return false;
      })
    );
  }
}
