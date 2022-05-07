import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable, take } from 'rxjs';
import { Order } from 'src/app/shared/model/order';
import { OrderActions } from 'src/app/store/order/order.actions';
import { ClientService } from 'src/app/shared/services/client/client.service';
@Component({
  selector: 'app-ice-cream-cart',
  templateUrl: './ice-cream-cart.component.html',
  styleUrls: ['./ice-cream-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamCartComponent implements OnInit {
  public orders$!: Observable<Order[]>;
  public total$!: Observable<number>;
  public isShipped$!: Observable<boolean>;

  constructor(
    private location: Location,
    private store: Store<AppState>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.orders$ = this.store.select((state) => state.order.iceCream);
    this.total$ = this.store.select((state) => state.order.total);
    this.isShipped$ = this.clientService.checkShippedOrder();
  }

  public onSubmit() {
    this.orders$.pipe(take(1)).subscribe((order) => {
      this.store.dispatch(OrderActions.clearOreder());
      const sendOrder: Order[] = [];
      order.map((order) => {
        sendOrder.push({
          id: order.id,
          name: order.name,
          amount: order.amount,
          capacity: order.capacity,
        });
      });

      if (sendOrder.length < 1) return;

      this.clientService.sendOrder(sendOrder);
    });

    this.onClose();
  }

  public onClose() {
    this.location.back();
  }

  public addIceCream(iceCream: Order) {
    const order = { ...iceCream, amount: 1 };
    this.store.dispatch(OrderActions.addOrder(order));
  }

  public removeIceCream(iceCream: Order) {
    this.store.dispatch(OrderActions.removeIceCream(iceCream));
  }
}
