import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
//import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  public authForm!: FormGroup;
  public isLogin = true;
  public isLoading = false;
  public error = '';

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.initAuthForm();
  }

  public onSubmit() {
    if (!this.authForm.valid) return;

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    let authObs;

    if (this.isLogin) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password).then((result) => {
        return result.user?.updateProfile({
          displayName: 'client',
        });
      });
    }

    // authObs.subscribe(
    //   () => {
    //     this.router.navigate(['recipes']);
    //     this.isLoading = false;
    //   },
    //   error => {
    //     this.isLoading = false;
    //     this.error = error.message;
    //   }
    // );

    authObs.then((result) => {
      console.log(result);
      this.router.navigate(['app']);
    });

    this.authForm.reset();
  }

  public switchAuthModelHandler() {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
    this.initAuthForm();
  }

  private initAuthForm() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
