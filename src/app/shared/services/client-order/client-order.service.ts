import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { OrderActions } from 'src/app/store/order/order.actions';
import { Order } from '../../model/order';
import { User } from '../../model/user';
import { UserOrder } from '../../model/userOrde';

@Injectable({
  providedIn: 'root',
})
export class ClientOrderService {
  private lastOrder!: AngularFireList<any>;
  private user!: User;

  constructor(private db: AngularFireDatabase, private store: Store) {
    this.initOrder();
  }

  public checkShippedOrder() {
    const date = this.getDate();
    return this.db
      .list(`orders/${date}`)
      .valueChanges()
      .pipe(
        map((el: any) =>
          el.some((el: UserOrder) => el.email === this.user.email)
        )
      );
  }

  public sendOrder(order: Order[]) {
    const date = this.getDate();
    const userOrder: UserOrder = {
      email: this.user.email,
      user: this.user.name,
      order: [...order],
    };
    this.db.list(`orders/${date}`).push(userOrder);
    this.setLastOrder(order);
  }

  public getLastOrder() {
    return this.lastOrder
      .snapshotChanges()
      .pipe(
        take(1),
        map((el) => {
          return el.map((order) => order.payload.val());
        })
      )
      .subscribe((arrayOrder) => {
        arrayOrder.flatMap((orders) => {
          orders.map((order: Order) => {
            this.store.dispatch(OrderActions.addOrder(order));
          });
        });
      });
  }

  public setLastOrder(order: Order[]) {
    this.lastOrder.remove();
    this.lastOrder.push(order);
  }

  public initOrder() {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}');
    this.lastOrder = this.db.list(`users/${this.user.uid}/order`);
  }

  private getDate() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    return `${year}-${month}-${day}`;
  }
}
