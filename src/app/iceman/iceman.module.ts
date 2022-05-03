import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { IcemanComponent } from './iceman.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';
import { ShapeListComponent } from './shape-list/shape-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderItemComponent } from './order-summary/order-item/order-item.component';

@NgModule({
  declarations: [
    IcemanComponent,
    OrderListComponent,
    OrderSummaryComponent,
    AddNewClientComponent,
    ShapeListComponent,
    OrderItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: IcemanComponent,
        children: [
          {
            path: 'new-client',
            component: AddNewClientComponent,
          },
          {
            path: 'config',
            component: ShapeListComponent,
          },
        ],
      },
    ]),
  ],
})
export class IcemanModule {}
