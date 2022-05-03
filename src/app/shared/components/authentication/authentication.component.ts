import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent implements OnInit {
  public authForm!: FormGroup;
  public isLoading = false;
  public error = '';
  @Input() public isLogin = true;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.initAuthForm();
  }

  public onSubmit() {
    if (!this.authForm.valid) return;

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    if (this.isLogin) {
      this.authService.login(email, password);
    } else {
      this.authService.signup(email, password);
    }

    this.authForm.reset();
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