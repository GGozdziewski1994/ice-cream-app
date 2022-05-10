import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IsClientGuard } from '../shared/guards/isClient.guard';
import { IsIcemanGuard } from '../shared/guards/isIceman.guard';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'iceman',
            canActivate: [IsIcemanGuard],
            loadChildren: async () =>
              (await import('../iceman/iceman.module')).IcemanModule,
          },
          {
            path: 'client',
            canActivate: [IsClientGuard],
            loadChildren: async () =>
              (await import('../client/client.module')).ClientModule,
          },
        ],
      },
    ]),
  ],
})
export class ShellModule {}
