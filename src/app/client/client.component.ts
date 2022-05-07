import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Order } from '../shared/model/order';
import { ClientService } from '../shared/services/client/client.service';
import { OrderActions } from '../store/order/order.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService, private store: Store) {}

  ngOnInit(): void {
    this.clientService.checkShippedOrder();
  }

  public getLastOrderClient() {
    this.clientService
      .getLastOrder()
      .pipe(take(1))
      .subscribe((arrayOrder) => {
        arrayOrder.flatMap((orders) => {
          orders.map((order: Order) => {
            this.store.dispatch(OrderActions.addOrder(order));
          });
        });
      });
  }
}
