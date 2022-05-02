import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData!: Observable<firebase.default.User | null>;

  constructor(private fireAuth: AngularFireAuth) {
    this.userData = this.fireAuth.authState;
  }

  public login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public signup(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  public logout() {
    this.fireAuth.signOut();
  }
}
