import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { isClientGuard } from '../shared/guards/isClient.guard';
import { isIcemanGuard } from '../shared/guards/isIceman.guard';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'iceman',
            canActivate: [isIcemanGuard],
            loadChildren: async () =>
              (await import('../iceman/iceman.module')).IcemanModule,
          },
          {
            path: 'client',
            canActivate: [isClientGuard],
            loadChildren: async () =>
              (await import('../client/client.module')).ClientModule,
          },
        ],
      },
    ]),
  ],
})
export class ShellModule {}
