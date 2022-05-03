import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { IcemanComponent } from './iceman.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';
import { ShapeListComponent } from './shape-list/shape-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IcemanComponent,
    OrderListComponent,
    OrderSummaryComponent,
    AddNewClientComponent,
    ShapeListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IcemanComponent,
        children: [
          {
            path: 'new-client',
            component: AddNewClientComponent,
          },
        ],
      },
    ]),
  ],
})
export class IcemanModule {}
