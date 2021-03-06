import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { User } from '../../model/user';
import { AuthActions } from '../../../store/auth/auth.actions';
import { Router } from '@angular/router';
import { isLoggedActions } from 'src/app/store/isLoggedUser/isLoggedUser.actions';
import { OrderActions } from 'src/app/store/order/order.actions';
import { ClientOrderService } from '../client-order/client-order.service';
import { ClientFavouriteIceCreamService } from '../client-favourite-ice-cream/client-favourite-ice-service.service';
import { OrderState } from 'src/app/store/order/order.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData!: Observable<firebase.default.User | null>;
  private CLIENT = 'client';

  constructor(
    private fireAuth: AngularFireAuth,
    private store: Store<AppState>,
    private router: Router,
    private clientService: ClientOrderService,
    private clientFavouriteIceCreamService: ClientFavouriteIceCreamService
  ) {
    this.userData = this.fireAuth.authState;
  }

  public login(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user?.email) {
          const userData: User = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName?.split('||')[0],
            refreshToken: result.user.refreshToken,
            name: result.user.displayName?.split('||')[1],
          };

          this.setUser(userData);
          this.clientService.initOrder();
          this.clientFavouriteIceCreamService.initFavs();
        }
      })
      .catch((error) => window.alert(error.message));
  }

  public autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!userData.email) {
      this.router.navigate(['auth']);
    }

    if (userData.refreshToken) {
      this.setUser(userData);
    }
  }

  public signup(email: string, password: string, name: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user?.updateProfile({
          displayName: `${this.CLIENT}||${name}`,
        });
      })
      .catch((error) => window.alert(error.message));
  }

  public logout() {
    this.fireAuth.signOut();
    localStorage.removeItem('userData');
    this.store.dispatch(AuthActions.setNotAuth());
    this.store.dispatch(OrderActions.clearOreder());
    this.router.navigate(['auth']);
  }

  private setUser(userData: User) {
    localStorage.setItem('userData', JSON.stringify(userData));
    this.store.dispatch(AuthActions.setAuth());
    if (userData.displayName === this.CLIENT) {
      this.store.dispatch(isLoggedActions.setIsClient());
      const order: OrderState = JSON.parse(
        localStorage.getItem('order') || '{}'
      );
      if (order.iceCream) {
        this.store.dispatch(OrderActions.addAllOrder(order));
      }

      this.router.navigate(['app/client']);
    } else {
      this.store.dispatch(isLoggedActions.setIsIceman());
      this.router.navigate(['app/iceman']);
    }
  }
}
