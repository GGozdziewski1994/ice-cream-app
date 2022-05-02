import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcemanComponent } from './iceman.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';
import { ShapeListComponent } from './shape-list/shape-list.component';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild([
      {
        path: '',
        component: IcemanComponent,
      },
    ]),
  ],
})
export class IcemanModule {}
