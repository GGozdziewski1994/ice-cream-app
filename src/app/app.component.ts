import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

export type x = {
  name: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
