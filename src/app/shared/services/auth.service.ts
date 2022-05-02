import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { User } from '../model/user';
import { AuthActions } from '../../store/auth/auth.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData!: Observable<firebase.default.User | null>;

  constructor(
    private fireAuth: AngularFireAuth,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.userData = this.fireAuth.authState;
  }

  public login(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user?.email) {
          const userData: User = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
            refreshToken: result.user.refreshToken,
          };

          localStorage.setItem('userData', JSON.stringify(userData));
          this.store.dispatch(AuthActions.setAuth());
          if (userData.displayName === 'client') {
            this.store.dispatch(AuthActions.setIsClient());
          }
        }
      });
  }

  public autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userData') || '');

    if (!userData) {
      return;
    }

    if (userData.refreshToken) {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.store.dispatch(AuthActions.setAuth());
      if (userData.displayName === 'client') {
        this.store.dispatch(AuthActions.setIsClient());
      }
    }
  }

  public signup(email: string, password: string) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        return result.user?.updateProfile({
          displayName: 'client',
        });
      });
  }

  public logout() {
    this.fireAuth.signOut();
    localStorage.removeItem('userData');
    this.store.dispatch(AuthActions.setNotAuth());
    this.router.navigate(['auth']);
  }
}

// : Promise<firebase.default.auth.UserCredential>
