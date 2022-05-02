import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { FavoriteIceCreamComponent } from './favorite-ice-cream/favorite-ice-cream.component';
import { IceCreamCartComponent } from './ice-cream-cart/ice-cream-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientComponent,
    IceCreamListComponent,
    FavoriteIceCreamComponent,
    IceCreamCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientComponent,
      },
    ]),
  ],
})
export class ClientModule {}
