import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ClientComponent } from './client.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { FavoriteIceCreamComponent } from './favorite-ice-cream/favorite-ice-cream.component';
import { IceCreamCartComponent } from './ice-cream-cart/ice-cream-cart.component';
import { RouterModule } from '@angular/router';
import { IceCreamItemComponent } from './ice-cream-list/ice-cream-item/ice-cream-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientComponent,
    IceCreamListComponent,
    FavoriteIceCreamComponent,
    IceCreamCartComponent,
    IceCreamItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientComponent,
        children: [
          {
            path: '',
            component: IceCreamListComponent,
          },
          {
            path: 'favorite-ice-cream',
            component: FavoriteIceCreamComponent,
          },
          {
            path: 'ice-cream-cart',
            component: IceCreamCartComponent,
          },
        ],
      },
    ]),
  ],
})
export class ClientModule {}
